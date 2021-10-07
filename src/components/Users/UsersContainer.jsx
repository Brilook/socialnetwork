import React from 'react';
import {connect} from "react-redux";
import {
  follow, getUsers, subscribe, toggleIsFetching, unFollow, unSubscribe,
} from "../../redax/usersReducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);

  }

  onPageChange = (page) => {
    this.props.getUsers(page, this.props.pageSize);
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
               followingInProgress={this.props.followingInProgress}
               subscribe={this.props.subscribe}
               unSubscribe={this.props.unSubscribe}

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
  toggleIsFetching,
  follow,
  unFollow,
  getUsers,
  unSubscribe,
  subscribe,
})(UsersAPIComponent);