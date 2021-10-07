import {myAPI} from "../components/api/myAPI";

const SET_USERS_DATA = 'SET_USERS_DATA';


const initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false,


};

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USERS_DATA:

      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    default:
      return state;
  }

}

export const setUsersData = (userId, email, login) => ({type: SET_USERS_DATA, data: {userId, email, login}});
export const getUsersData = () => (dispatch) => {
  myAPI.getMy()
    .then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setUsersData(id, email, login));
      }
    })
}

export default authReducer;