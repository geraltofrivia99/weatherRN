import React from "react";
import { connect } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from "./screens/Splash";
import City from "./screens/City";
import HomeTabs from "./screens/City/tabs";
import ErrorScreen from "./screens/Error";

import NavigationService from "./utils";
import { appStart } from "./modules";

const Nav = createStackNavigator(
  {
    HomeTabs: {
      screen: HomeTabs,
      header: null
    },
    Splash: {
      screen: Splash
    },
    City: {
      screen: City
    },
    Error: {
      screen: ErrorScreen
    }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
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
