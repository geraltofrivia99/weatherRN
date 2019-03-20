import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 30
  },
  title: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 26,
    color: "#000"
  },
  icon: {
    width: 64,
    height: 64
  },
  curTemp: {
    width: "100%",
    marginVertical: 15
  }
});
