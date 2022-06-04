import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo 1.png';
import HeaderLink from '../HeaderLink/HeaderLink';
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="header">
                {/* <h1>This is header</h1> */}
                <img className="header-logo logo" src={logo} alt="" />
            </div>

        </>

    );
};

export default Header;