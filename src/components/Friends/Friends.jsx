import React from 'react';
import {withAuthRedirect} from "../common/HOCs/withAuthRedirect";
// import style from './Friends.module.css'

const Friends = (props) => {
	return (
		<div className="bg">
			Friends
		</div>
	)
}

export default withAuthRedirect(Friends);