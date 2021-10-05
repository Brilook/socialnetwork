import React from 'react';
import styles from './Header.module.css';
import '../vireables.css';
import login from '../images/login.svg'

//
// import logoBlack from '../images/Logo-Black-wine.png';
// import logoWhite from '../images/Logo-White.png';
import logoWhiteSvg from '../images/Logo-White.svg';
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return (
        <header className={`bg ${styles.header}`}>
            <img  src={logoWhiteSvg} alt="logo"></img>
          <div className={styles.loginBlock}>
            {props.isAuth ? props.login
              : <NavLink to={'/login'}><img className={styles.loginIcon}  src={login} alt="login"></img></NavLink>}
          </div>
        </header>
    )
};

export default Header;