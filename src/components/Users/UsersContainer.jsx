import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {changeFollowStatusAC, setUsersAC} from "../../redax/usersReducer";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFollowStatus: (userId) => {
      dispatch(changeFollowStatusAC(userId))
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);