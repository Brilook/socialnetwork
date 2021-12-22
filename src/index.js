import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redax/redaxStore'
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

//FIXME: for deploy gh-pages: add basename={process.env.PUBLIC_URL}; change browser router to  hash router

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>, document.getElementById('root'));



