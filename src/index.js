import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redax/state'
import {BrowserRouter} from "react-router-dom";
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";

const rerenderEntriesTree = (state) => {

  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

rerenderEntriesTree(store.getState());

store.subscribe(rerenderEntriesTree);
