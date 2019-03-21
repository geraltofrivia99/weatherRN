import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

import City from "./index";
import Maps from "./Maps";

const CityTabs = createBottomTabNavigator({
  City: {
    screen: City,
    navigationOptions: {
      title: "CPU",
      tabBarIcon: ({ tintColor }: { tintColor: any }) => (
        <Icon name="microchip" size={17} color={tintColor} />
      )
    }
  },
  Maps: {
    screen: Maps,
    navigationOptions: {
      title: "CPU",
      tabBarIcon: ({ tintColor }: { tintColor: any }) => (
        <Icon name="microchip" size={17} color={tintColor} />
      )
    }
  }
});

export default createAppContainer(CityTabs);
