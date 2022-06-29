import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { user } = useAuth();

    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRouter;