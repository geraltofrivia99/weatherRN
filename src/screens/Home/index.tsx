import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";

import { appStart, fetchCitiesStart, fetchCityDataStart } from "../../modules";

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
    <TouchableOpacity
      style={styles.item}
      onPress={() => this.goToCity(item.name)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  goToCity = (city: string) => {
    const { onPressCity } = this.props;
    onPressCity(city);
  };

  render() {
    const { value } = this.state;
    const { cities } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={this.onChange}
          style={styles.input}
          placeholder="Search city"
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
  onFetchCities: fetchCitiesStart,
  onPressCity: fetchCityDataStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeUnconected);
