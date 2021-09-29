// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
  users: [],
  pageSize: 4,
  totalUserCount: 0,
  currentPage: 1

};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

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
      return {...state, users: [...action.users]};
      break;

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};
      break;

      case SET_TOTAL_USERS_COUNT:
        return {...state, totalUserCount: action.totalUserCount};
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
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUserCountAC = (totalUserCount) => ({type: SET_TOTAL_USERS_COUNT, totalUserCount});


export default usersReducer;