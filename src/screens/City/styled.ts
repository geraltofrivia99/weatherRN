import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingBottom: 30
  },
  title: {
    width: "100%",
    height: "50%",
    padding: 30
  },
  titleText: {
    fontSize: 26,
    color: "#000",
    width: "100%",
    textAlign: "center"
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
    paddingTop: 15,
    paddingBottom: 80,
    paddingHorizontal: 15
  },
  loader: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
