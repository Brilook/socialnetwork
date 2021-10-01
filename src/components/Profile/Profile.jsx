import React from 'react';
import MyPosts from './PostWrapper/MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostContainer from "./PostWrapper/NewPost/NewPostContainer";
import store from "../../redax/redaxStore";
import PostsWrapperContainer from "./PostWrapper/PostsWrapperContainer";


const Profile = () => {

  return (
    <div className="bg">
      <ProfileInfo nikName="Brilook" phoneNumber="06642420420"
                   shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
      {/*<NewPostContainer store={store}/>*/}
      {/*<MyPosts posts={store.getState().profilePage.postData}/>*/}
      <PostsWrapperContainer store={store}/>
    </div>
  )
};

export default Profile;

