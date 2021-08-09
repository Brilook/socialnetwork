import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './MyPosts/NewPost/NewPost';
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {

    return (
        <div className="bg">
            <ProfileInfo nikName="Brilook" phoneNumber="06642420420" shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
            <NewPost addPost={props.addPost} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText} />
            <MyPosts posts={props.state.postData} />
        </div>
    )
};

export default Profile;

