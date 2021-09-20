
import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={`bg ${style.message}`}>
          {props.message}

          <span>LIKES:{props.likesCount}</span>
        </div>
    )
}

export default Post;