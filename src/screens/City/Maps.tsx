import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import MapView from "react-native-maps";
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
}

class Maps extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const {
      location: { lat, lon }
    } = props;
    this.state = {
      region: getDelta(lat, lon, 9000)
    };
  }

  onRegionChange = (loc: any) => {
    const { latitude, longitude } = loc;
    const { onFetchCities } = this.props;
    this.setState({ region: getDelta(latitude, longitude, 9000) });
    onFetchCities(`${latitude}, ${longitude}`);
  };

  render() {
    const {
      cities,
      location: { lat, lon },
      onPressCity
    } = this.props;
    const { region } = this.state;
    return (
      <View style={{ flex: 1, paddingVertical: 30 }}>
        <View style={styles.bodyContainer}>
          <MapView
            style={styles.map}
            onRegionChangeComplete={this.onRegionChange}
            region={region}
          />
        </View>
        <View style={styles.flat}>
          <CityList cities={cities} onPressCity={onPressCity} />
        </View>
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
