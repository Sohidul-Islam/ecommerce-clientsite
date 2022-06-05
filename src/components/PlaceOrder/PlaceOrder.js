import React from 'react';
import img from "../../images/giphy.gif"

const PlaceOrder = (props) => {
    return (
        <div>
            <h2>Order is placed</h2>
            <img src={img}></img>
        </div>
    );
};

export default PlaceOrder;