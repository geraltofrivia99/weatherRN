import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { LineChart, YAxis, Grid, XAxis } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as shape from "d3-shape";

import { Temp } from "./tabroutes/Temp";
import { Graph } from "./tabroutes/Graph";

import { styles } from "./styled";

interface Props {
  location: any;
  current: any;
  days: any;
  temp: any;
  navigation: any;
}

const { width, height } = Dimensions.get("window");

const LazyPlaceholder = ({ route }: { route: any }) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
);

class City extends React.PureComponent<Props> {
  state = {
    index: 0,
    routes: [
      { key: "Temperature", title: "Temperature" },
      { key: "Charts", title: "Charts" }
    ]
  };

  _handleIndexChange = (index: number) => this.setState({ index });

  _renderLazyPlaceholder = ({ route }: { route: any }) => (
    <LazyPlaceholder route={route} />
  );

  goBack = () => {
    const {
      navigation: { goBack }
    } = this.props;
    goBack();
  };

  render() {
    const { location, current, days, temp } = this.props;
    return (
      <>
        <View
          style={{
            width: "100%",
            height: 60,
            paddingTop: 20,
            backgroundColor: "pink"
          }}
        >
          <TouchableOpacity
            style={{
              height: 44,
              width: 44,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={this.goBack}
          >
            <Icon name="long-arrow-alt-left" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <TabView
          lazy
          navigationState={this.state}
          renderScene={SceneMap({
            Temperature: () => <Temp name={location.name} current={current} />,
            Charts: () => <Graph temp={temp} days={days} />
          })}
          renderLazyPlaceholder={this._renderLazyPlaceholder}
          onIndexChange={this._handleIndexChange}
          initialLayout={{
            width: width,
            height: height
          }}
          style={styles.wrapper}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: "white" }}
              style={{ backgroundColor: "pink" }}
            />
          )}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  const days: Array<number> = [];
  const temp: Array<string> = [];
  state.app.curentCity.forecast.forecastday.forEach((cur: any) => {
    days.push(+cur.date.split("-")[2]);
    temp.push(cur.day.avgtemp_c);
  });
  console.log(state.app.curentCity);
  return {
    current: state.app.curentCity.current,
    forecast: state.app.curentCity.forecast,
    location: state.app.curentCity.location,
    days,
    temp
  };
};

export default connect(mapStateToProps)(City);
