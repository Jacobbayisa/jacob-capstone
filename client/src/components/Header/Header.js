import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png"
const Header = () => {
    return(
        <div className="header">
            <Link to ="/"><img className="header__logo" src={logo}/> </Link>
            <ul className="header__nav">
                <Link className="header__link" to ="/upload" > Rent House </Link>
                <Link className="header__link" to ="/login"> Signin</Link>
                <Link className="header__link" to ="/signup"> Create Account </Link>
            </ul>
        </div>
    )
}

export default Header;