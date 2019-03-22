import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getDelta } from "../../utils";
import CityList from "../../components/CityList";

import { fetchCityDataStart, fetchCitiesStart } from "../../modules";

import { styles } from "./styled";

interface Props {
  cities: Array<object>;
  location: {
    lat: number;
    lon: number;
  };
  onPressCity: any;
  onFetchCities: any;
}

interface State {
  region: any;
  isMapReady: boolean;
}

class Maps extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const {
      location: { lat, lon }
    } = props;
    this.state = {
      region: getDelta(lat, lon, 9000),
      isMapReady: false
    };
  }

  onRegionChange = (loc: any) => {
    const { latitude, longitude } = loc;
    const { onFetchCities } = this.props;
    this.setState({ region: loc });
    onFetchCities(`${latitude}, ${longitude}`);
  };

  onmapReady = () => {
    this.setState({ isMapReady: true });
  };

  render() {
    const {
      cities,
      onPressCity,
      location: { lat, lon }
    } = this.props;
    const { region, isMapReady } = this.state;
    return (
      <View style={{ flex: 1, paddingVertical: 30, paddingBottom: 60 }}>
        <View style={styles.bodyContainer}>
          <MapView
            style={styles.map}
            onRegionChangeComplete={this.onRegionChange}
            region={region}
            onMapReady={this.onmapReady}
          >
            <Marker
              coordinate={{
                latitude: lat,
                longitude: lon
              }}
            />
          </MapView>
        </View>
        <View style={styles.flat}>
          <CityList cities={cities} onPressCity={onPressCity} />
        </View>
        {!isMapReady && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  location: state.app.locations,
  cities: state.app.cities
});
const mapDispatchToProps = {
  onPressCity: fetchCityDataStart,
  onFetchCities: fetchCitiesStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maps);
