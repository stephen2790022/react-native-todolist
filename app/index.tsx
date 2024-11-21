import { Alert, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import s from "./home.style";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "./components/header/header.component";
import { CardsList } from "./components/cards-list/cards-list.component";
import { Footer } from "./components/footer/footer.component";
import _ from "lodash";
import { AddBtn } from "./components/AddBtn/add-btn.component";
import { Modal } from "./components/Modal/modal.component";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export enum TabValues {
  ALL = "All",
  IN_PROGRESS = "In progress",
  COMPLETED = "Completed",
}

export type CardList = {
  id: number | string;
  title: string;
  completed: boolean;
};

export default function Index() {
  const [currentTab, setCurrentTab] = useState<TabValues>(TabValues.ALL);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleTabPress = (tab: TabValues) => setCurrentTab(tab);
  const isActive = (tab: TabValues) => tab === currentTab;
  const [list, setList] = useState<CardList[]>([]);

  const handleModalOpen = () => {
    setIsOpen((prev) => !prev);
    if (inputValue) {
      setInputValue("");
    }
  };

  const handleInputChange = (value: string) => setInputValue(value);

  const getSavedData = async () => {
    const jsonValue = await AsyncStorage.getItem("todoList");
    const parsedData: CardList[] =
      jsonValue != null ? JSON.parse(jsonValue) : [];
    return parsedData;
  };

  const handleSaveData = async () => {
    const newToDoListJson = JSON.stringify(list);
    await AsyncStorage.setItem("todoList", newToDoListJson);
  };

  const handleAdd = async () => {
    try {
      if (!inputValue) {
        throw new Error("Enter a value please");
      } else {
        const newTodo = { id: uuidv4(), title: inputValue, completed: false };
        const newTodoList = [newTodo, ...list];
        setList(newTodoList);
        setInputValue("");

        setIsOpen(false);
      }
    } catch (error) {
      Alert.alert("Alert Title", (error as Error).message, [
        {
          text: "Close",
          style: "cancel",
        },
      ]);
    }
  };

  const toggleCompleted = (id: number | string) => {
    setList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleTabFilter = useCallback(
    (selectedTab: TabValues) => {
      switch (selectedTab) {
        case TabValues.ALL:
          return list;
        case TabValues.IN_PROGRESS:
          return list.filter((todo) => !todo.completed);
        case TabValues.COMPLETED:
          return list.filter((todo) => todo.completed === true);
        default:
          return list;
      }
    },
    [currentTab, list]
  );

  const handleDelete = (id: number | string) => {
    setList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    getSavedData().then((data) => setList(data));
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    getSavedData().then((data) => {
      if (!_.isEqual(data, list)) {
        handleSaveData();
        console.log(list);
      }
    });
  }, [list]);

  return (
    <Fragment key="Home">
      <SafeAreaProvider>
        <SafeAreaView style={s.mainContainer}>
          <View style={s.headerContainer}>
            <Header />
          </View>
          <View style={s.body}>
            <CardsList
              handleDelete={handleDelete}
              toggleCompleted={toggleCompleted}
              list={handleTabFilter(currentTab)}
            />
          </View>
          <AddBtn handleModalOpen={handleModalOpen} />
          <Modal
            handleModalOpen={handleModalOpen}
            handleInputChange={handleInputChange}
            handleAdd={handleAdd}
            isOpen={isOpen}
          />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Footer
          handleTabFilter={handleTabFilter}
          handleTabPress={handleTabPress}
          isActive={isActive}
        />
      </View>
    </Fragment>
  );
}
