import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";
const store = createStore(Reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
Kommunicate.init("20e7dfa5f155c93d0ccd63888ca204de6", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
