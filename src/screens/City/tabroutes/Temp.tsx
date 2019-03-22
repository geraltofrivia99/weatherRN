import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

import { styles } from "../styled";

export const Temp = React.memo(
  ({ name, current }: { name: any; current: any }) => {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.curTemp}>
          Current temp: {current.temp_c} &#8451; ({current.temp_f} &#8457;)
        </Text>
        <Text style={styles.wind}>Wind speed: {current.wind_kph} kph</Text>
        <Text style={styles.wind}>Pressure in: {current.pressure_in}</Text>
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            fontWeight: "400",
            fontSize: 26,
            paddingVertical: 10
          }}
        >
          Conditions
        </Text>
        <Text>{current.condition.text}</Text>
        <Image
          source={{ uri: `https:${current.condition.icon}` }}
          style={{ width: 64, height: 64 }}
        />
      </View>
    );
  }
);
