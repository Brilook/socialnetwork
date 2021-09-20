
import React from 'react';
import style from './Post.module.css'
import { AiOutlineLike } from 'react-icons/ai';

const Post = (props) => {
    return (
        <div className={`bg ${style.message}`}>
          {props.message}

          <span><AiOutlineLike /> {props.likesCount} </span>
        </div>
    )
}

export default Post;