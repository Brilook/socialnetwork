import React from 'react';
import store from "../../../redax/redaxStore";
import NewPostContainer from "./NewPost/NewPostContainer";
import MyPosts from "./MyPosts/MyPosts";


const PostWrapper = (props) => {

  return (
    <div >
      <NewPostContainer store={store}/>
      <MyPosts posts={store.getState().profilePage.postData}/>
    </div>
  )
};

export default PostWrapper;
