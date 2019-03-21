import React from "react";
import { connect } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import Splash from "./screens/Splash";
// import City from "./screens/City";
import CityTabs from "./screens/City/tabs";

import NavigationService from "./utils";
import { appStart } from "./modules";

const Nav = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Splash: {
      screen: Splash
    },
    CityTabs: {
      screen: CityTabs
    }
  },
  {
    initialRouteName: "Splash"
  }
);

const Navigation = createAppContainer(Nav);

interface Props {
  onStart: any;
}

class AppUnconected extends React.Component<Props> {
  componentDidMount() {
    const { onStart } = this.props;
    onStart();
  }

  render() {
    return (
      <Navigation
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

const mapDisaptchToProps = {
  onStart: appStart
};

export default connect(
  null,
  mapDisaptchToProps
)(AppUnconected);
