import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import Photos from "./components/Photos/Photos";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redax/appReducer";
import InitializePreloader from "./components/common/Preloader/InitializePreloader";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }


  render() {

    if (!this.props.initialized) {
      return <InitializePreloader/>
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/friends' render={() => <Friends/>}/>
          <Route path='/photos' render={() => <Photos/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='/users' render={() => <UsersContainer/>}/>
          <Route path='/login' render={() => <Login/>}/>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,

})

export default connect(mapStateToProps, {initializeApp})(App);