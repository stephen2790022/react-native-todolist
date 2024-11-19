import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import s from "./home.style";
import { Fragment, useCallback, useMemo, useState } from "react";
import { Header } from "./components/header/header.component";
import { CardsList } from "./components/cards-list/cards-list.component";
import { Footer } from "./components/footer/footer.component";
import fakeList from "./components/cards-list/list.json";

export enum TabValues {
  ALL = "All",
  IN_PROGRESS = "In progress",
  COMPLETED = "Completed",
}

export type CardList = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Index() {
  const [currentTab, setCurrentTab] = useState<TabValues>(TabValues.ALL);
  const handleTabPress = (tab: TabValues) => setCurrentTab(tab);
  const isActive = (tab: TabValues) => tab === currentTab;
  const [list, setList] = useState<CardList[]>(fakeList);

  const toggleCompleted = (id: number) => {
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

  const handleDelete = (id: number) => {
    setList((prev) => prev.filter((todo) => todo.id !== id));
  };

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
