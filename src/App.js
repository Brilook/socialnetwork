import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import Photos from "./components/Photos/Photos";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path='/profile' render={() => <Profile />}/>
        <Route path='/dialogs' render={() => <DialogsContainer />}/>
        <Route path='/friends' render={() => <Friends/>}/>
        <Route path='/photos' render={() => <Photos/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>
    </div>
  );
}

export default App;