import React from 'react';
import { connect } from "react-redux";
import {
  follow, requestUsers, subscribe, toggleIsFetching, unFollow, unSubscribe,
} from "../../redax/usersReducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUserCount, getUsers } from '../../redax/usersSelectors';

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);

  }

  onPageChange = (page) => {
    this.props.requestUsers(page, this.props.pageSize);
  }

  render() {
    return <>

      {this.props.isFetching ?
        <div className={'bg'}><Preloader /></div> :
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default connect(mapStateToProps, {
  toggleIsFetching,
  follow,
  unFollow,
  requestUsers,
  unSubscribe,
  subscribe,
})(UsersAPIComponent);