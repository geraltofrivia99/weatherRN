import {
  SET_APP,
  ON_APP_START,
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_DATA_START,
  FETCH_CITIES_DATA_SUCCESS,
  SET_LOCATIONS,
  SET_ERRORS
} from "./types";

export const setApp = (payload: any) => ({ type: SET_APP, payload });
export const appStart = () => ({ type: ON_APP_START });

export const fetchCitiesStart = (payload: any) => ({
  type: FETCH_CITIES_START,
  payload
});
export const fetchCitiesSuccess = (payload: any) => ({
  type: FETCH_CITIES_SUCCESS,
  payload
});

export const fetchCityDataStart = (payload: any) => ({
  type: FETCH_CITIES_DATA_START,
  payload
});
export const fetchCityDataSuccess = (payload: any) => ({
  type: FETCH_CITIES_DATA_SUCCESS,
  payload
});

export const setLocations = (payload: any) => ({
  type: SET_LOCATIONS,
  payload
});

export const setError = () => ({
  type: SET_ERRORS
});
