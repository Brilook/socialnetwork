import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import defaultAvatar from '../images/images.jfif';

class Users extends React.Component {
  baseUrlUsers = 'https://social-network.samuraijs.com/api/1.0/users';

  componentDidMount() {
    axios.get(`${this.baseUrlUsers}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {

        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);

      })
  }

  onPageChange = (page) => {
    this.props.changeCurrentPage(page);
    axios.get(`${this.baseUrlUsers}?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {


    const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    let pages = [];

    if (pagesCount > 10) {

      if (this.props.currentPage < 5) {
        pages = [];
        for (let i = 1; i < 10; i++) {
          pages.push(i);
        }
        pages.push(pagesCount);
      } else
      if (this.props.currentPage >= 5) {
        pages = []
        for (let p = 1; p <= pagesCount; p++) {

          if (p === 1 ) {
            pages.push(p);
          } else
        if (p === pagesCount ) {
          pages.push(pagesCount);
          } else
          if (p >= this.props.currentPage - 3 && p < this.props.currentPage + 4 && pages[pages.length] !== pagesCount){
            pages.push(p);
          } else {
            continue;
          }
        }
      }
    } else {
      for (let k = 1; k <= pagesCount; k++) {
        pages.push(k);
      }
    }
    return <div className={`bg`}>
      <div className={styles.pagination}>
        {pages.map(page => {
          return <span key={page}
                       onClick={() => this.onPageChange(page)}
                       className={`${this.props.currentPage === page && styles.selectedPage} ${styles.page}`}>{page}</span>
        })}
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