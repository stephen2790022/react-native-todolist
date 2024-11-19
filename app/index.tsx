import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import s from "./home.style";
import { Fragment, useState } from "react";
import { Header } from "./components/header/header.component";
import { CardsList } from "./components/cards-list/cards-list.component";
import { Footer } from "./components/footer/footer.component";

export enum TabValues {
  ALL = "All",
  IN_PROGRESS = "In progress",
  COMPLETED = "Completed",
}

export default function Index() {
  const [currentTab, setCurrentTab] = useState<TabValues>(TabValues.ALL);
  const handleTabPress = (tab: TabValues) => setCurrentTab(tab);
  const isActive = (tab: TabValues) => tab === currentTab;
  return (
    <Fragment key="Home">
      <SafeAreaProvider>
        <SafeAreaView style={s.mainContainer}>
          <View style={s.headerContainer}>
            <Header />
          </View>
          <View style={s.body}>
            <CardsList currentTab={currentTab} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Footer handleTabPress={handleTabPress} isActive={isActive} />
      </View>
    </Fragment>
  );
}
