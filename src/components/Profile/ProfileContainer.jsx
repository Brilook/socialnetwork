import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getMyProfile, getUserProfile} from "../../redax/profileReducer";


class ProfileContainer extends React.Component {


  componentDidMount() {
    let userId = this.props.match.params.userId;
    userId ? this.props.getUserProfile(userId) : this.props.getMyProfile();
  }

  render() {

    return (
      <div className="bg">
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})
const profileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile, getMyProfile})(profileContainerWithRouter);

