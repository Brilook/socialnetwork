import {myAPI} from "../components/api/myAPI";
import {stopSubmit} from "redux-form";

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
        ...action.payload,
      }

    default:
      return state;
  }

}

export const setUsersData = (userId, email, login, isAuth) => ({type: SET_USERS_DATA, payload: {userId, email, login, isAuth }});
export const getUsersData = () => (dispatch) => {
  myAPI.getMy()
    .then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setUsersData(id, email, login, true));
      }
    })
};

export const login = ( email, login, rememberMe, isAuth) => (dispatch) => {
  myAPI.login(email, login, rememberMe, isAuth)
    .then(data => {

      if (data.resultCode === 0) {
        dispatch(getUsersData());
      } else {
        dispatch(stopSubmit('login', {_error: data.messages[0]}))
      }
    })
};
export const logOut = () => (dispatch) => {
  myAPI.logOut()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setUsersData(null, null, null, false));
      }
    })
};

export default authReducer;