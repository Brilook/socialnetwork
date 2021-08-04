import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css'

const MyPosts = (props) => {

      return (
        <div className={style.myPosts}>
            My post...

          {props.posts.map((post, idx) => <Post key={idx} message={post.message} likesCount={post.likesCount}/>)}
        </div>
    )
}

export default MyPosts;