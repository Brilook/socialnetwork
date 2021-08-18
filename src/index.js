import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redax/redaxStore'
import {BrowserRouter} from "react-router-dom";


const rerenderEntriesTree = () => {

  ReactDOM.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

rerenderEntriesTree();

store.subscribe(() => {
  rerenderEntriesTree()
});
