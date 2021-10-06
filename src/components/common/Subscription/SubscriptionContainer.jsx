import React from 'react';
import Subscription from "./Subscription";
import {connect} from "react-redux";
import {changeFollowStatus} from "../../../redax/usersReducer";
import {usersAPI} from "../../api/usersAPI";
import Preloader from "../Preloader/Preloader";


const SubscriptionContainer = props => {



    return <Subscription userId={ props.followed}/>



}



export default SubscriptionContainer;