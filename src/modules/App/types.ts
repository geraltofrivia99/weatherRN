export const SET_APP = "App/SET";
export const ON_APP_START = "App/Start";

export const FETCH_CITIES_START = "App/FETCH_CITIES_START";
export const FETCH_CITIES_SUCCESS = "App/FETCH_CITIES_SUCCESS";

export interface AppState {
  isLoading: boolean;
  cities: Array<object>;
}
