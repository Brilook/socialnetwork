import React from 'react';
import {connect} from "react-redux";
import {
  changeFollowStatusAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUsersAC,
  toggleIsFetchingAC
} from "../../redax/usersReducer";
import * as axios from "axios";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {
  baseUrlUsers = 'https://social-network.samuraijs.com/api/1.0/users';

  componentDidMount() {
    this.props.toggleIsFetchingAC(true);
    axios.get(`${this.baseUrlUsers}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetchingAC(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);

      })
  }

  onPageChange = (page) => {

    this.props.toggleIsFetchingAC(true);
    this.props.changeCurrentPage(page);
    axios.get(`${this.baseUrlUsers}?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetchingAC(false);
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <>
      {this.props.isFetching ?
        <div className={'bg'}><Preloader/></div>:
        <Users totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               onPageChange={this.onPageChange}
               changeFollowStatus={this.props.changeFollowStatus}/>
      }
    </>
  }

}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFollowStatus: (userId) => {
      dispatch(changeFollowStatusAC(userId))
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },

    changeCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUserCount: (totalUserCount) => {
      dispatch(setTotalUserCountAC(totalUserCount))
    },
    toggleIsFetchingAC: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);