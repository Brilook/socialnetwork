import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import avatarDefault from '../../images/images.jfif';
import ProfileStatus from './ProfileStatus'


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
          <img src={props.profile.photos.large || avatarDefault} alt={'avatar'}/>
        </div>
        <div className={style.description}>
          <span className={style.nikName}>{props.profile.fullName}</span>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          <span className={style.shortDesc}>{props.profile.aboutMe}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;