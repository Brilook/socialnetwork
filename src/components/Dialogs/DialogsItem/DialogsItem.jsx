import React from 'react';
import style from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={style.dialogsItems}>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  )
}

export default DialogItem;