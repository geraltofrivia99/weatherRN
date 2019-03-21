import { AppState } from "./types";

import {
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_DATA_SUCCESS,
  SET_LOCATIONS
} from "./types";

export const initialState: AppState = {
  isLoading: false,
  cities: [],
  curentCity: {},
  locations: {
    lat: 0,
    lon: 0,
    error: null
  }
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
    default:
      return state;
  }
};
