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
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<Navbar/>
				<div className="app-wrapper-content">
					<Route path='/profile' render={ () => <Profile posts={props.posts}/>} />
					<Route path='/dialogs' render={ () => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>} />
					<Route path='/friends' render={ () => <Friends />} />
					<Route path='/photos' render={ () => <Photos />} />
					<Route path='/music' render={ () => <Music />} />
					<Route path='/settings' render={ () => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;