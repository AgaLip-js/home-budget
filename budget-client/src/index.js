import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const loader = document.querySelector(".loader");

const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

// setTimeout(
//   () =>
ReactDOM.render(
  <App />,
  document.getElementById("root")
  //     ),
  //   2000
);

serviceWorker.unregister();
