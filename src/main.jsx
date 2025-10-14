import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import store from "./store";  // make sure this matches your store.js location
import App from "./App";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HashRouter>
    <BrowserRouter basename="/FoodorderingApp">
      <App />
    </BrowserRouter>
    </HashRouter>
  </Provider>
);
