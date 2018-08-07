import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import "bootstrap/dist/css/bootstrap.min.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { modalStateChangeReducer } from "./reducers";

const rootReducer = combineReducers({ modalStateChangeReducer });
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
