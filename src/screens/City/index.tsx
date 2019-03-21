import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { LineChart, YAxis, Grid, XAxis } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import * as shape from "d3-shape";
import { styles } from "./styled";

const Gradient = () => (
  <Defs key={"gradient"}>
    <LinearGradient id="gradient" x1="0" y="0%" x2="100%" y2="0%">
      <Stop offset={"0%"} stopColor={"rgb(134, 65, 244)"} />
      <Stop offset={"100%"} stopColor={"rgb(66, 194, 244)"} />
    </LinearGradient>
  </Defs>
);

const axesSvg = { fontSize: 10, fill: "grey" };
const verticalContentInset = { top: 10, bottom: 10 };
const xAxisHeight = 10;
const City = (props: any) => {
  const { location, current, forecast, days, temp } = props;
  useEffect(() => {
    console.log(days, temp);
  });
  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{location.name}</Text>
        <Text style={styles.curTemp}>
          Current temp: {current.temp_c} &#8451; ({current.temp_f} &#8457;)
        </Text>
        <Text style={styles.wind}>Wind speed: {current.wind_kph} kph</Text>
        <Text style={styles.wind}>Pressure in: {current.pressure_in}</Text>
      </View>
      <View style={styles.chartWrapper}>
        <View style={styles.chart}>
          <YAxis
            data={temp}
            style={{ marginBottom: xAxisHeight }}
            contentInset={verticalContentInset}
            svg={axesSvg}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <LineChart
              style={{ flex: 1 }}
              data={temp}
              contentInset={verticalContentInset}
              svg={{
                strokeWidth: 2,
                stroke: "url(#gradient)"
              }}
              curve={shape.curveLinear}
            >
              <Grid />
              <Gradient />
            </LineChart>
            <XAxis
              style={{ marginHorizontal: -10, height: xAxisHeight }}
              data={days}
              formatLabel={(value, index) => value}
              contentInset={{ left: 10, right: 10 }}
              svg={axesSvg}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  const days: Array<number> = [];
  const temp: Array<string> = [];
  state.app.curentCity.forecast.forecastday.forEach((cur: any) => {
    days.push(+cur.date.split("-")[2]);
    temp.push(cur.day.avgtemp_c);
  });
  return {
    current: state.app.curentCity.current,
    forecast: state.app.curentCity.forecast,
    location: state.app.curentCity.location,
    days,
    temp
  };
};

export default connect(mapStateToProps)(City);
