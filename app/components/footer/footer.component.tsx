import { View, Text, TouchableOpacity } from "react-native";
import { TabValues } from "@/app/index";
import { s } from "./footer.style";

type FooterProps = {
  handleTabPress: (tab: TabValues) => void;
  isActive: (tab: TabValues) => boolean;
};
export const Footer = ({ handleTabPress, isActive }: FooterProps) => {
  return (
    <View style={s.mainContainer}>
      <TouchableOpacity onPress={() => handleTabPress(TabValues.ALL)}>
        <Text
          style={[
            s.tabItem,
            { color: isActive(TabValues.ALL) ? "#005CC8" : "black" },
          ]}
        >
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress(TabValues.IN_PROGRESS)}>
        <Text
          style={[
            s.tabItem,
            { color: isActive(TabValues.IN_PROGRESS) ? "#005CC8" : "black" },
          ]}
        >
          In progress
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress(TabValues.COMPLETED)}>
        <Text
          style={[
            s.tabItem,
            { color: isActive(TabValues.COMPLETED) ? "#005CC8" : "black" },
            // {isActive(TabValues.COMPLETED)}
          ]}
        >
          Completed
        </Text>
      </TouchableOpacity>
    </View>
  );
};
