import {
  SET_APP,
  ON_APP_START,
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCESS
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
