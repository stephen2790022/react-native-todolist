import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  cardContainer: {
    flex: 1,
    gap: 10,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingLeft: 25,
    paddingRight: 30,
    width: "100%",
    height: 110,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },

  logo: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
});
