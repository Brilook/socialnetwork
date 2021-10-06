import React from 'react';
import styles from "./Subscription.module.css";

const Subscription = props => {
  debugger
  return <button className={`bg ${styles.followBtn}`}
                 onClick={() => props.changeFollowStatus(props.user.id)}>{props.subscriptionStatus || 'button'}</button>
}

export default Subscription;