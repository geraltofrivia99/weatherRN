import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

import Home from "../Home";
import Maps from "./Maps";

const HomeTabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    header: null,
    navigationOptions: {
      title: "CPU",
      tabBarIcon: ({ tintColor }: { tintColor: any }) => (
        <Icon name="microchip" size={17} color={tintColor} />
      )
    }
  },
  Maps: {
    screen: Maps,
    header: null,
    navigationOptions: {
      title: "CPU",
      tabBarIcon: ({ tintColor }: { tintColor: any }) => (
        <Icon name="microchip" size={17} color={tintColor} />
      )
    }
  }
});

export default createAppContainer(HomeTabs);
