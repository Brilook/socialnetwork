import React from 'react';
import {connect} from "react-redux";
import {
  changeFollowStatus,
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  toggleIsFetching
} from "../../redax/usersReducer";
import * as axios from "axios";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {
  baseUrlUsers = 'https://social-network.samuraijs.com/api/1.0/users';

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`${this.baseUrlUsers}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);

      })
  }

  onPageChange = (page) => {

    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    axios.get(`${this.baseUrlUsers}?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
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
               changeFollowStatus={this.props.changeFollowStatus}


        />
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

export default connect(mapStateToProps, { changeFollowStatus,
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  toggleIsFetching, })(UsersAPIComponent);