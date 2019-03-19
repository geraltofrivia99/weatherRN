import React from "react";
import { Provider } from "react-redux";
import App from "./src/navigation";

import { store } from "./src/store/index";

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
