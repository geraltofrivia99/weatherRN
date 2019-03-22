import { AppState } from "./types";

import {
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_DATA_SUCCESS,
  SET_LOCATIONS,
  SET_ERRORS
} from "./types";

export const initialState: AppState = {
  isLoading: false,
  cities: [],
  curentCity: {},
  locations: {
    lat: 0,
    lon: 0,
    error: null
  },
  errors: null
};

export default (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload
      };
    case FETCH_CITIES_DATA_SUCCESS:
      return {
        ...state,
        curentCity: action.payload
      };
    case SET_LOCATIONS:
      return {
        ...state,
        locations: action.payload
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: "Connection Problems"
      };
    default:
      return state;
  }
};
