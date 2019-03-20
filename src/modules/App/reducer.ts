import { AppState } from "./types";

import { FETCH_CITIES_SUCCESS, FETCH_CITIES_DATA_SUCCESS } from "./types";

export const initialState: AppState = {
  isLoading: false,
  cities: [],
  curentCity: {}
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
    default:
      return state;
  }
};
