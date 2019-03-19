import { takeLatest, call, put, delay } from "redux-saga/effects";
import { ON_APP_START, FETCH_CITIES_START } from "./types";
import NavigationService from "../../utils";
import { get } from "../../config/api";

import { fetchCitiesSuccess } from "../../modules";

function* onStart() {
  console.log("Start");
  const response = yield call(get, "&q=G2J");
  console.log(response);

  if (Array.isArray(response)) {
    yield put(fetchCitiesSuccess(response));
  } else {
  }
  yield call(NavigationService.navigate, "Home", {});
}

function* onFetchCities({ payload }: { payload: any }) {
  try {
    const response = yield call(get, `&q=${payload}`);
    if (Array.isArray(response) && response.length > 0) {
      yield put(fetchCitiesSuccess(response));
    } else {
      console.log("err");
    }
  } catch (error) {
    console.log(error);
  }
}

export default [
  takeLatest(ON_APP_START, onStart),
  takeLatest(FETCH_CITIES_START, onFetchCities)
];
