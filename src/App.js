import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import Photos from "./components/Photos/Photos";

const App = (props) => {

	return (
		<div className="app-wrapper">
			<Header/>
			<Navbar/>
			<div className="app-wrapper-content">
				<Route path='/profile' render={ () => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>} />
				<Route path='/dialogs' render={ () => <Dialogs state={props.state.messagePage}/>} />
				<Route path='/friends' render={ () => <Friends />} />
				<Route path='/photos' render={ () => <Photos />} />
				<Route path='/music' render={ () => <Music />} />
				<Route path='/settings' render={ () => <Settings />} />
			</div>
		</div>
	);
}

export default App;