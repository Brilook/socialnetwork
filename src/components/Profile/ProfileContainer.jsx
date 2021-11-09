import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getMyProfile, getStatus, getUserProfile, updateStatus} from "../../redax/profileReducer";
import {withAuthRedirect} from "../common/HOCs/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {


  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div className="bg">
        <Profile {...this.props} profile={this.props.profile} satus={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,

})




export default compose(
  connect(mapStateToProps, {getUserProfile, getMyProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

