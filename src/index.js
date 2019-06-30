import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./Store/Context";
import App from "./components/App";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
