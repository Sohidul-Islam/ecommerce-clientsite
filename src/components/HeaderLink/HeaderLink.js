import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLink.css';
const HeaderLink = () => {
    return (
        <div className="navbar">
            <Link className="nav-link" to="/shop">Shop</Link>
            <Link className="nav-link" to="/order-review">Order Review</Link>
            <Link className="nav-link" to="/manage-inventory">Manage Inventory here</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
        </div>

    );
};

export default HeaderLink;