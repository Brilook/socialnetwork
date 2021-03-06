import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redax/redaxStore";
import PostsWrapperContainer from "./PostWrapper/PostsWrapperContainer";


const Profile = (props) => {

  return (
    <div className="bg">
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <PostsWrapperContainer store={store}/>
    </div>
  )
};

export default Profile;

