// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS';

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    // case FOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map(user => {
    //       if (user.id === action.userId) {
    //         return {...user, followed: true}
    //       }
    //       return user;
    //     })
    //   }
    //   break;
    //
    // case UNFOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map(user => {
    //       if (user.id === action.userId) {
    //         return {...user, followed: false}
    //       }
    //       return user;
    //     })
    //   }
    //   break;
    case CHANGE_FOLLOW_STATUS:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: !user.followed}
          }
          return user;
        })
      }

    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]};
      break;

    default:
      return state;
  }

}
//
// export const followAC = (userId) => ({type: FOLLOW, userId});
// export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const changeFollowStatusAC = (userId) => ({type: CHANGE_FOLLOW_STATUS, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;