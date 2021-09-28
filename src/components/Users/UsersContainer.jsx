import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {changeFollowStatusAC, setUsersAC} from "../../redax/usersReducer";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
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