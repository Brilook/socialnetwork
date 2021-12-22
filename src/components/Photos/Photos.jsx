import React from 'react';
import {withAuthRedirect} from "../common/HOCs/withAuthRedirect";
// import style from './Photos.module.css'

const Photos = (props) => {
	return (
		<div className="bg">
			Photos
		</div>
	)
}



export default withAuthRedirect(Photos);