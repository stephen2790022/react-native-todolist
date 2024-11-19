import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 10,
    position: "relative",
  },
  headerContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: "bold",
  },
  body: {
    flex: 5,
  },
  footer: {
    height: 70,
  },
});

export default s;
