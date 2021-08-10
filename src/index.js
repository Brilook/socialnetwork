import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redax/state'
import {BrowserRouter} from "react-router-dom";

const rerenderEntriesTree = (state) => {

  ReactDOM.render(
    <BrowserRouter>
      <App  state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

rerenderEntriesTree(store.getState());

store.subscribe(rerenderEntriesTree);