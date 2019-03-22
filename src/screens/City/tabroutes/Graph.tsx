import React from "react";
import { View, Text } from "react-native";
import { LineChart, YAxis, Grid, XAxis } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import * as shape from "d3-shape";

import { styles } from "../styled";

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

export const Graph = React.memo(({ temp, days }: { temp: any; days: any }) => (
  <View style={styles.chartWrapper}>
    <Text
      style={{
        fontSize: 30,
        fontWeight: "500",
        width: "100%",
        textAlign: "center"
      }}
    >
      Weekly temp
    </Text>
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
          formatLabel={(value, index) => value + 1}
          contentInset={{ left: 10, right: 10 }}
          svg={axesSvg}
        />
      </View>
    </View>
  </View>
));
