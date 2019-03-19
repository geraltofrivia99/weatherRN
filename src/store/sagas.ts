import { all } from "redux-saga/effects";

import app from "../modules/App/sagas";

export default function* sagas() {
  yield all(
    [app].reduce((allSagas, currentSagas) => allSagas.concat(currentSagas), [])
  );
}
