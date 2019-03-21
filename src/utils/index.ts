import { NavigationActions } from "react-navigation";

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(routeName: any, params: any) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator
};

export const getDelta = (lat: number, lon: number, distance: number) => {
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;

  const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
  const longitudeDelta =
    distance / (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));
  return {
    latitude: lat,
    longitude: lon,
    latitudeDelta,
    longitudeDelta
  };
};
