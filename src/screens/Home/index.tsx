import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput } from "react-native";

import {
  fetchCitiesStart,
  fetchCityDataStart,
  setLocations
} from "../../modules";

import CityList from "../../components/CityList";

import { HomeScreenProps, ConnectedProps } from "./types";

import { styles } from "./styled";

class HomeUnconected extends Component<HomeScreenProps> {
  static navigationOptions = {
    header: null
  };
  state = {
    value: "",
    latitude: "",
    longitude: "",
    error: null
  };

  onChange = (value: string) => {
    const { onFetchCities } = this.props;
    this.setState({ value });
    onFetchCities(value);
  };

  render() {
    const { value } = this.state;
    const { cities, onPressCity } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={this.onChange}
          style={styles.input}
          placeholder="Search city"
        />
        <CityList cities={cities} onPressCity={onPressCity} />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  cities: state.app.cities
});

const mapDispatchToProps: ConnectedProps = {
  onFetchCities: fetchCitiesStart,
  onPressCity: fetchCityDataStart,
  setLocations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeUnconected);
