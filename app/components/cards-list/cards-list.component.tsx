import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { s } from "./cards-list.style";

import { CardList } from "@/app/index";

type CardProps = {
  id: number | string;
  title: string;
  completed: boolean;
  toggleCompleted: (id: number | string) => void;
  handleDelete: (id: number | string) => void;
};

const Card = (props: CardProps) => {
  const { title, completed, id, toggleCompleted, handleDelete } = props;
  const check = require("@/assets/images/check.png");

  const handleLongPress = () => {
    Alert.alert("Alert Title", "Do you want to delete this Todo", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => handleDelete(id),
        style: "destructive",
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={s.card}
      onLongPress={handleLongPress}
      onPress={() => toggleCompleted(id)}
    >
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
  list: CardList[];
  toggleCompleted: (id: number | string) => void;
  handleDelete: (id: number | string) => void;
};

export const CardsList = ({
  list,
  toggleCompleted,
  handleDelete,
}: CardsListProps) => {
  return (
    <ScrollView>
      <View style={s.cardContainer}>
        {list.map((infos) => (
          <Card
            key={infos.id}
            {...infos}
            toggleCompleted={toggleCompleted}
            handleDelete={handleDelete}
          />
        ))}
      </View>
    </ScrollView>
  );
};
