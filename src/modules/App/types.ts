export const SET_APP = "App/SET";
export const ON_APP_START = "App/Start";

export const FETCH_CITIES_START = "App/FETCH_CITIES_START";
export const FETCH_CITIES_SUCCESS = "App/FETCH_CITIES_SUCCESS";

export const FETCH_CITIES_DATA_START = "App/FETCH_CITIES_DATA_START";
export const FETCH_CITIES_DATA_SUCCESS = "App/FETCH_CITIES_DATA_SUCCESS";

export const SET_LOCATIONS = "App/SET_LOCATIONS";

export interface AppState {
  isLoading: boolean;
  cities: Array<object>;
  curentCity: Object;
  locations: {
    lat: number;
    lon: number;
    error?: any;
  };
}
