import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  tabItem: {
    fontSize: 18,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textShadowColor: "transparent", // Hides the shadow color
    textShadowOffset: { width: 0, height: 3 },
  },
});
