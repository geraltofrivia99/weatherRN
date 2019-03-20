import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  ON_APP_START,
  FETCH_CITIES_START,
  FETCH_CITIES_DATA_START
} from "./types";
import NavigationService from "../../utils";
import { get } from "../../config/api";

import { fetchCitiesSuccess, fetchCityDataSuccess } from "../../modules";

function* onStart() {
  console.log("Start");
  const response = yield call(get, {
    query: "G2J",
    params: "search.json"
  });

  if (Array.isArray(response)) {
    yield put(fetchCitiesSuccess(response));
  } else {
  }
  yield call(NavigationService.navigate, "Home", {});
}

function* onFetchCities({ payload }: { payload: any }) {
  try {
    const response = yield call(get, { params: "search.json", query: payload });
    if (Array.isArray(response) && response.length > 0) {
      yield put(fetchCitiesSuccess(response));
    } else {
      console.log("err");
    }
  } catch (error) {
    console.log(error);
  }
}

function* onFetchCityData({ payload }: { payload: any }) {
  try {
    const response = yield call(get, {
      params: "forecast.json",
      query: `${payload}&days=7`
    });
    console.log("cityresp", response);
    if (response.current) {
      yield put(fetchCityDataSuccess(response));
      yield call(NavigationService.navigate, "City", {});
    } else {
      console.log("err");
    }
  } catch (err) {
    console.log(err);
  }
}

export default [
  takeLatest(ON_APP_START, onStart),
  takeLatest(FETCH_CITIES_START, onFetchCities),
  takeLatest(FETCH_CITIES_DATA_START, onFetchCityData)
];
