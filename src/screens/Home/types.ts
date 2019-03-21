import { NavigationScreenProp } from "react-navigation";

export interface HomeScreenProps extends ConnectedProps {
  navigation: NavigationScreenProp<any, any>;
  cities: Array<object>;
}

export interface ConnectedProps {
  onFetchCities: any;
  onPressCity: any;
  setLocations: any;
}
