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
      title: "Saerch",
      tabBarIcon: ({ tintColor }: { tintColor: any }) => (
        <Icon name="search" size={17} color={tintColor} />
      )
    }
  },
  Maps: {
    screen: Maps,
    header: null,
    navigationOptions: {
      title: "Map",
      tabBarIcon: ({ tintColor }: { tintColor: any }) => (
        <Icon name="map-marker-alt" size={17} color={tintColor} />
      )
    }
  }
});

export default createAppContainer(HomeTabs);
