import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  btnStyle: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#C2DAFF",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#2F76E5",
    fontSize: 24,
    fontWeight: "bold",
  },
});
