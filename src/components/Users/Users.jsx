import React from 'react';
import styles from './Users.module.css'
import defaultAvatar from '../images/images.jfif';
import {NavLink} from "react-router-dom";


const Users = (props) => {


  const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
//FIXME: pagination v93

  if (pagesCount > 10) {

    if (props.currentPage < 5) {
      pages = [];
      for (let i = 1; i < 10; i++) {
        pages.push(i);
      }
      pages.push(pagesCount);
    } else if (props.currentPage >= 5) {
      pages = []
      for (let p = 1; p <= pagesCount; p++) {

        if (p === 1) {
          pages.push(p);
        } else if (p === pagesCount) {
          pages.push(pagesCount);
        } else if (p >= props.currentPage - 3 && p < props.currentPage + 4 && pages[pages.length] !== pagesCount) {
          pages.push(p);
        }
      }
    }
  } else {
    for (let k = 1; k <= pagesCount; k++) {
      pages.push(k);
    }
  }


  const getPaginationBtns = pages => {

    const paginationPages = []
    let oldPage = 0;
    for (let page of pages) {


      if (oldPage + 1 !== page && page !== pages[pages.length - 1]) {
        paginationPages.push(<span key={page}>...</span>);
        oldPage = page;
      } else {
        paginationPages.push(<button key={page}
                                     onClick={() => props.onPageChange(page)}
                                     className={`${props.currentPage === page && styles.selectedPage} ${styles.page} bg`}>{page}</button>);
        oldPage = page;
      }
    }
    return paginationPages;
  }

  return <div className={`bg`}>
    <div className={styles.pagination}>{getPaginationBtns(pages)} </div>
    {
      props.users.map(user => <div key={user.id} className={`bg ${styles.usersItem}`}>
        <NavLink to={'/profile/' + user.id}>
          <img className={styles.userAvatar} src={user.photos.small !== null ? user.photos.small : defaultAvatar}
               alt="avatar"/>
        </NavLink>
        <>
          {user.followed
            ?
            <button disabled={props.followingInProgress.some(id => id === user.id)} className={`bg ${styles.followBtn}`}
                    onClick={() => {
                      props.unSubscribe(user.id);
                    }}>unsubscribe</button>
            :
            <button disabled={props.followingInProgress.some(id => id === user.id)} className={`bg ${styles.followBtn}`}
                    onClick={() => {
                      props.subscribe(user.id);
                    }}>subscribe</button>}
        </>


        <span className={styles.fullName}>{user.name}</span>
        <span className={styles.status}>{user.status}</span>
        <span className={styles.country}>Country: {'user.location.country'}</span>
        <span className={styles.city}>City: {'user.location.city'}</span>

      </div>)

    }
  </div>
}

export default Users;