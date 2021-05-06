import React from "react";
import "./style.css";
import First from "./First";
import { usersReducer } from "./redux/usersReducer";
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

const store = createStore(usersReducer, applyMiddleware(logger, thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <First />
      </div>
    </Provider>
  );
}
