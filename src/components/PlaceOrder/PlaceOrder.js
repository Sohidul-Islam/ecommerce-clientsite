import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import img from "../../images/giphy.gif"

const PlaceOrder = (props) => {
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.email) {
            navigate("/login", {
                state: { from: location.state?.from }
            })
        }
    }, [])
    return (
        <div>
            <h2>Order is placed</h2>
            <img src={img}></img>
        </div>
    );
};

export default PlaceOrder;