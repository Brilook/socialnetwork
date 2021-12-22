import React from 'react';
import store from '../../../redax/redaxStore';
import MyPosts from './MyPosts/MyPosts';
import {reduxForm} from "redux-form";
import NewPost from "./NewPost/NewPost";
import {maxLength, required} from "../../common/utils/validators/validators";






const NewPostReduxForm = reduxForm({form: 'NewPost'})(NewPost);
const MAX_LENGTH_POST = 50;

const PostWrapper = (props) => {
  
  return (
    <div>
      <NewPostReduxForm btnValue={'Add'}
                        name={'newPostBody'}
                        onSubmit={props.addNewPost}
                        required={required}
                        maxLength={maxLength(MAX_LENGTH_POST)}
      />
      <MyPosts posts={store.getState().profilePage.postData}/>
    </div>
  )
};

export default PostWrapper;
