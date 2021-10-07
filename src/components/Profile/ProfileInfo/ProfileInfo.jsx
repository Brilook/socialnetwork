import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import avatarDefault from '../../images/images.jfif';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={style.banner}>
        <img
          src="https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png"
          alt="bgrimg"></img>
      </div>
      <div className={style.mainUser}>
        <div className={style.avatar}>
          <img src={props.profile.photos.large || avatarDefault}/>
        </div>
        <div className={style.description}>
          <span className={style.nikName}>{props.profile.fullName}</span>
          {/*<span className={style.phoneNumber}>{props.phoneNumber}</span>*/}
          <a className={style.phoneNumber} href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a>
          <a className={style.phoneNumber} href={props.profile.facebook}>{props.profile.facebook}</a>
          <a className={style.phoneNumber} href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a>
          <a className={style.phoneNumber} href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a>
          <span className={style.shortDesc}>{props.profile.aboutMe}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;