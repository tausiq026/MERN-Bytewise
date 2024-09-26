import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import store from './app/store'
import { Provider } from "react-redux";

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Router>
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>
)