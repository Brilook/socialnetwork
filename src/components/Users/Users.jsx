import React from 'react';
import styles from './Users.module.css'

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8qIUOgwywzIfrJdaSr8zOuJr4sU0FEWwrQ&usqp=CAU',
        fullName: 'Brilook',
        status: 'I am a superdaddy I am a superdaddyI am a superdaddyI am a superdaddyI am a superdaddyI am a superdaddyI am a superdaddy',
        location: {city: 'Amsterdam', country: 'Netherlands'}
      },
      {
        id: 2,
        followed: false,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8qIUOgwywzIfrJdaSr8zOuJr4sU0FEWwrQ&usqp=CAU',
        fullName: 'Dasha',
        status: 'I am a supermamy',
        location: {city: 'Kyev', country: 'Ukraine'}
      },
      {
        id: 3,
        followed: false,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8qIUOgwywzIfrJdaSr8zOuJr4sU0FEWwrQ&usqp=CAU',
        fullName: 'Pasha',
        status: 'I am a superson',
        location: {city: 'California', country: 'USA'}
      },
      {
        id: 4,
        followed: true,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8qIUOgwywzIfrJdaSr8zOuJr4sU0FEWwrQ&usqp=CAU',
        fullName: 'Polina',
        status: 'I am a superdaughter',
        location: {city: 'Milan', country: ' Italy'}
      },

    ])
  }

  return <div className={`bg`}>
    {
      props.users.map(user => <div key={user.id} className={`bg ${styles.usersItem}`}>
        <img className={styles.userAvatar} src={user.avatar} alt="avatar"/>
        <button className={`bg ${styles.followBtn}`}
                onClick={() => props.changeFollowStatus(user.id)}>{user.followed ? 'Follow' : 'Unfollow'}</button>
        <span className={styles.fullName}>{user.fullName}</span>
        <span className={styles.status}>{user.status}</span>
        <span className={styles.country}>Country: {user.location.country}</span>
        <span className={styles.city}>City: {user.location.city}</span>

      </div>)

    }
  </div>
}
export default Users;