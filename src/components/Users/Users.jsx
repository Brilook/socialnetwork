import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import defaultAvatar from '../images/images.jfif';

class Users extends React.Component {

  constructor(props) {
    super(props);
    alert("new")
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        debugger
        props.setUsers(response.data.items)
      })
  }

  render() {
    return <div className={`bg`}>
      {
        this.props.users.map(user => <div key={user.id} className={`bg ${styles.usersItem}`}>
          <img className={styles.userAvatar} src={user.photos.small !== null ? user.photos.small : defaultAvatar} alt="avatar"/>
          <button className={`bg ${styles.followBtn}`}
                  onClick={() => this.props.changeFollowStatus(user.id)}>{user.followed ? 'Follow' : 'Unfollow'}</button>
          <span className={styles.fullName}>{user.name}</span>
          <span className={styles.status}>{user.status}</span>
          <span className={styles.country}>Country: {'user.location.country'}</span>
          <span className={styles.city}>City: {'user.location.city'}</span>

        </div>)

      }
    </div>
  }

}

export default Users;