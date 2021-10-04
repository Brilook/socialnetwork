const SET_USERS = 'SET_USERS';
const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  users: [],
  pageSize: 4,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,


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
        return {...state, totalUserCount: action.totalCount};
      break;
      case TOGGLE_IS_FETCHING:
        return {...state, isFetching: action.isFetching};
      break;

    default:
      return state;
  }

}

export const changeFollowStatus = (userId) => ({type: CHANGE_FOLLOW_STATUS, userId})
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUserCount = (totalUserCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalUserCount });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });


export default usersReducer;