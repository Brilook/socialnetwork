import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css'
import NewPostContainer from "../NewPost/NewPostContainer";

const MyPosts = (props) => {

  const postsElement = props.posts.map(post => <Post key={post.id} message={post.message}
                                                     likesCount={post.likesCount}/>);
  return (
    <div className={style.myPosts}>
      {/*<NewPostContainer store={props.store}/>*/}
      My post...


      {postsElement}
    </div>
  )
}

export default MyPosts;