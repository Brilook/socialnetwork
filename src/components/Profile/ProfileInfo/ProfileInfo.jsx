import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

	return (
		<div>
			<div className={style.banner}>
				<img src="https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png" alt="bgrimg"></img>
			</div>
			<div className={style.mainUser}>
				<div className={style.avatar}>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8qIUOgwywzIfrJdaSr8zOuJr4sU0FEWwrQ&usqp=CAU" alt="ava"/>
				</div>
				<div className={style.description}>
					<span className={style.nikName}>{props.nikName}</span>
					{/*<span className={style.phoneNumber}>{props.phoneNumber}</span>*/}
					<a className={style.phoneNumber} href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a>
					<span className={style.shortDesc}>{props.shortDesc}</span>
				</div>
			</div>
		</div>
	)
}

export  default ProfileInfo;