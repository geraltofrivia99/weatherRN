import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "remote-redux-devtools";

import reducers from "./reducer";
import sagas from "./sagas";

let sagaMiddleware = createSagaMiddleware();
let storeCreator = createStore;

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = storeCreator(reducers, enhancer);
sagaMiddleware.run(sagas);
