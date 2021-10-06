import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUserCount,
  setUsers, toggleFollowingProgress, toggleIsFetching, unFollow,
} from "../../redax/usersReducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../api/usersAPI";

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {

        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUserCount(data.totalCount);

      });
  }

  onPageChange = (page) => {

    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);

    usersAPI.getUsers(page, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items)
    })
  }

  render() {
    return <>

      {this.props.isFetching ?
        <div className={'bg'}><Preloader/></div> :
        <Users totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               onPageChange={this.onPageChange}
               follow={this.props.follow}
               unFollow={this.props.unFollow}
               toggleFollowingProgress={this.props.toggleFollowingProgress}
               followingInProgress={this.props.followingInProgress}


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
    followingInProgress: state.usersPage.followingInProgress,

  }
}

export default connect(mapStateToProps, {
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  toggleIsFetching,
  follow,
  unFollow,
  toggleFollowingProgress

})(UsersAPIComponent);