import React from 'react';
import logo from '../../images/Logo 1.png';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            {/* <h1>This is header</h1> */}
            <img className="header-logo logo" src={logo} alt="" />
            <nav><a href="/shop">Shop</a><a href="/order-review">Order Review</a><a href="/manage-inventory">Manage Inventory here</a></nav>
        </div>
    );
};

export default Header;