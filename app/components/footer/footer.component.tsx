import { View, Text, TouchableOpacity } from "react-native";
import { CardList, TabValues } from "@/app/index";
import { s } from "./footer.style";

type FooterProps = {
  handleTabPress: (tab: TabValues) => void;
  isActive: (tab: TabValues) => boolean;
  handleTabFilter: (tab: TabValues) => CardList[];
};
export const Footer = ({
  handleTabPress,
  isActive,
  handleTabFilter,
}: FooterProps) => {
  return (
    <View style={s.mainContainer}>
      <TouchableOpacity onPress={() => handleTabPress(TabValues.ALL)}>
        <Text
          style={[
            s.tabItem,
            { color: isActive(TabValues.ALL) ? "#005CC8" : "black" },
          ]}
        >
          {` All (${handleTabFilter(TabValues.ALL).length})`}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress(TabValues.IN_PROGRESS)}>
        <Text
          style={[
            s.tabItem,
            { color: isActive(TabValues.IN_PROGRESS) ? "#005CC8" : "black" },
          ]}
        >
          {`In progress (${handleTabFilter(TabValues.IN_PROGRESS).length})`}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress(TabValues.COMPLETED)}>
        <Text
          style={[
            s.tabItem,
            { color: isActive(TabValues.COMPLETED) ? "#005CC8" : "black" },
          ]}
        >
          {`Completed (${handleTabFilter(TabValues.COMPLETED).length})`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
