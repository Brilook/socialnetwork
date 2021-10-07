import {usersAPI} from "../components/api/usersAPI";
import {subscriptionAPI} from "../components/api/subscriptionAPI";

const SET_USERS = 'SET_USERS';
const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const initialState = {
  users: [],
  pageSize: 4,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],


};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

    // case CHANGE_FOLLOW_STATUS:
    //   return {
    //     ...state,
    //     users: state.users.map(user => {
    //       if (user.id === action.userId) {
    //         return {...user, followed: !user.followed}
    //       }
    //       return user;
    //     })
    //   }

    case SET_USERS:
      return {...state, users: action.users};
      break;

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};
      break;

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUserCount: action.totalCount};
      break;
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
      break;
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {...state, followingInProgress: action.isFetching
          ?  [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)};
      break;
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        })
      };
      break;

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        })
      };
      break;

    default:
      return state;
  }

}

// export const changeFollowStatus = (userId) => ({type: CHANGE_FOLLOW_STATUS, userId})
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUserCount = (totalUserCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalUserCount});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUserCount(data.totalCount));
        dispatch(setCurrentPage(currentPage))
      });
  };
}
export const unSubscribe = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    subscriptionAPI.unsubscribe(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unFollow(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  };
};

export const subscribe = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    subscriptionAPI.subscribe(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(follow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  };
};

export default usersReducer;