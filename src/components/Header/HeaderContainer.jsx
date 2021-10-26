import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUsersData, logOut} from "../../redax/authReducer";


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersData();
  }

  render() {

    return <Header {...this.props}/>
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,

});

export default connect(mapStateToProps, {logOut, getUsersData})(HeaderContainer);