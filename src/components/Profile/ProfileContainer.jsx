import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redax/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

   baseUrlProfile = 'https://social-network.samuraijs.com/api/1.0/profile';

  componentDidMount() {

    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2;
    }

    axios.get(`${this.baseUrlProfile}/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);

      })
  }

  setUserProfile(data) {
    
  }

  render() {

    return (

      <div className="bg">
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})
const profileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(profileContainerWithRouter);

