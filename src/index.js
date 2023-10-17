import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOMClient from "react-dom/client";
window.React = React;
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "stores";


const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
