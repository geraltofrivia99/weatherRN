import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingVertical: 30
  },
  title: {
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    height: "50%",
    paddingHorizontal: 30
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
    marginVertical: 15,
    textAlign: "left"
  },
  chart: {
    height: 200,
    padding: 20,
    flexDirection: "row",
    width: "100%"
  },
  chartWrapper: {
    width: "100%",
    height: "50%",
    justifyContent: "flex-end"
  },
  wind: {
    width: "100%",
    textAlign: "left"
  },
  bodyContainer: {
    // ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "35%",
    paddingHorizontal: 10,
    overflow: "hidden"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    top: 0,
    left: 10,
    right: 10,
    bottom: 0,
    width: "100%",
    height: "100%"
  },
  flat: {
    paddingHorizontal: 15
  }
});
