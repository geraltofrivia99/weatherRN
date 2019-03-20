import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, Text, Image } from "react-native";
import { styles } from "./styled";

const City = (props: any) => {
  const [data, setData] = useState({});
  const { location, current } = props;
  useEffect(() => {
    console.log(current.condition.icon.split("//")[1]);
  });
  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{location.name}</Text>
        {/* <Image
          source={{ uri: current.condition.icon.split("//")[1] }}
          style={styles.icon}
        /> */}
      </View>
      <View style={styles.curTemp}>
        <Text>Current temp: {current.temp_c} &#8451;</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  current: state.app.curentCity.current,
  forecast: state.app.curentCity.forecast,
  location: state.app.curentCity.location
});

export default connect(mapStateToProps)(City);
