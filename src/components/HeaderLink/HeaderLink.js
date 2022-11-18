import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './HeaderLink.css';
const HeaderLink = () => {
    const { user, logout } = useAuth();
    return (
        <div className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/shop">Shop</Link>
            <Link className="nav-link" to="/order-review">Order Review</Link>
            <Link className="nav-link" to="/manage-inventory">Manage Inventory here</Link>
            {user?.email && <Link className="nav-link" to="/my-orders">My Orders</Link>}

            {user?.email && <span className="text-light">{user.displayName}</span>}
            {user?.email ? <Link className="nav-link" onClick={logout} to="/login">Logout</Link>
                : <Link className="nav-link" to="/login">Login</Link>}
            <Link className="nav-link" to="/register">Register</Link>
        </div>

    );
};

export default HeaderLink;