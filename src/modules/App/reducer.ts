import { AppState } from "./types";

import { FETCH_CITIES_SUCCESS } from "./types";

export const initialState: AppState = {
  isLoading: false,
  cities: []
};

export default (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload
      };
    default:
      return state;
  }
};
