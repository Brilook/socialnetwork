import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './MyPosts/NewPost/NewPost';
import style from "./Profile.module.css";

const Profile = () => {
    console.log(style);
    return (

        <div className="bg">
            <div className={style.banner}>
                <img src="https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png" alt="bgrimg"></img>
            </div>
            <div>
                ava + description
            </div>
            <NewPost />
            <MyPosts />
        </div>
    )
};

export default Profile;

