import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import defaultAvatar from '../images/images.jfif';

class Users extends React.Component {
  baseUrlsers = 'https://social-network.samuraijs.com/api/1.0/users';
  componentDidMount() {
     axios.get(`${this.baseUrlsers}?page="${this.pageSize}"&count="${this.totalUserCount}"`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {

     const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
     const pages = [];

     for (let i = 1; i <= pagesCount; i++) {
       pages.push(i);
     }

    return <div className={`bg`}>
        <div className={styles.pagination}>
          { pages.map(page => {
            return <span className={`${this.props.currentPage === page && styles.selectedPage} ${styles.page}`}>{page}</span>
          }) }
        </div>
      {
        this.props.users.map(user => <div key={user.id} className={`bg ${styles.usersItem}`}>
          <img className={styles.userAvatar} src={user.photos.small !== null ? user.photos.small : defaultAvatar}
               alt="avatar"/>
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