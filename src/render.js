import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost,updateNewPostText} from './redax/state'
import {BrowserRouter} from "react-router-dom";

export const rerenderEntriesTree = (state) => {

  ReactDOM.render(
    <BrowserRouter>
      <App  state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,
    document.getElementById('root')
  )
}