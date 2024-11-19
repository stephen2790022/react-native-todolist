import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { s } from "./cards-list.style";
import fakeList from "./list.json";
import { useState } from "react";
import { TabValues } from "@/app/index";

type CardProps = {
  id: number;
  title: string;
  completed: boolean;
  toggleCompleted: (id: number) => void;
};

type CardList = {
  id: number;
  title: string;
  completed: boolean;
};

const Card = (props: CardProps) => {
  const { title, completed, toggleCompleted } = props;
  const check = require("@/assets/images/check.png");
  return (
    <TouchableOpacity style={s.card} onPress={() => toggleCompleted(props.id)}>
      <Text
        style={[
          s.cardTitle,
          completed && { textDecorationLine: "line-through" },
        ]}
      >
        {title}
      </Text>
      {completed && <Image style={s.logo} source={check} />}
    </TouchableOpacity>
  );
};

type CardsListProps = {
  currentTab: TabValues;
};

export const CardsList = ({ currentTab }: CardsListProps) => {
  const [list, setList] = useState<CardList[]>(fakeList);
  const toggleCompleted = (id: number) => {
    setList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  function handleTabFilter() {
    switch (currentTab) {
      case TabValues.ALL:
        return list;
      case TabValues.IN_PROGRESS:
        return list.filter((todo) => !todo.completed);
      case TabValues.COMPLETED:
        return list.filter((todo) => todo.completed === true);
    }
  }

  return (
    <ScrollView>
      <View style={s.cardContainer}>
        {handleTabFilter().map((infos) => (
          <Card key={infos.id} {...infos} toggleCompleted={toggleCompleted} />
        ))}
      </View>
    </ScrollView>
  );
};
