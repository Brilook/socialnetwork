import React from 'react';
import styles from './Header.module.css';
import '../vireables.css';
import login from '../images/login.svg'
import logoWhiteSvg from '../images/Logo-White.svg';
import {NavLink} from 'react-router-dom';
import logout from '../images/logout.svg'


const Header = (props) => {

    return (
        <header className={`bg ${styles.header}`}>
            <img className={styles.logo}  src={logoWhiteSvg} alt="logo"></img>
          <div className={styles.loginBlock}>
            {props.isAuth
              ? <div className={styles.loginData}><img onClick={props.logOut} className={styles.loginIconOut} src={logout} alt="logout"/><span>{props.login}</span> </div>
              : <NavLink to={'/login'}><img className={styles.loginIcon}  src={login} alt="login"></img></NavLink>}
          </div>
        </header>
    )
};

export default Header;