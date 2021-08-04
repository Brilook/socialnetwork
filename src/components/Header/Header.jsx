import React from 'react';
import styles from './Header.module.css';
import '../vireables.css';

//
// import logoBlack from '../images/Logo-Black-wine.png';
// import logoWhite from '../images/Logo-White.png';
import logoWhiteSvg from '../images/Logo-White.svg';


const Header = () => {

    return (
        <header className={`bg ${styles.header}`}>
            <img  src={logoWhiteSvg} alt="logo"></img>
        </header>
    )
};

export default Header;