import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";

import { appStart, fetchCitiesStart } from "../../modules";

import { HomeScreenProps, ConnectedProps } from "./types";

import { styles } from "./styled";

class HomeUnconected extends Component<HomeScreenProps> {
  static navigationOptions = {
    header: null
  };
  state = {
    value: ""
  };

  onChange = (value: string) => {
    const { onFetchCities } = this.props;
    this.setState({ value });
    onFetchCities(value);
  };

  renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.item}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  render() {
    const { value } = this.state;
    const { cities } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={this.onChange}
          style={styles.input}
        />
        <FlatList
          data={cities}
          renderItem={this.renderItem}
          keyExtractor={(item: any) => item.name}
          contentContainerStyle={styles.flatlist}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  cities: state.app.cities
});

const mapDispatchToProps: ConnectedProps = {
  onStart: appStart,
  onFetchCities: fetchCitiesStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeUnconected);
