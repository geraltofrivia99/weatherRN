import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

const ErrorScreen = ({ err }: { err: any }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>{err}</Text>
  </View>
);

const mapStateTopProps = (state: any) => ({
  err: state.app.errors
});

export default connect(mapStateTopProps)(ErrorScreen);
