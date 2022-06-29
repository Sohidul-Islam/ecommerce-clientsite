import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    if (user?.email) {
        return children;
    }
    navigate("/login", {
        state: { from: location.pathname }
    })
    // return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRouter;