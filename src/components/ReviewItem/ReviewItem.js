import React from 'react';

const ReviewItem = (props) => {
    console.log("Props review item ", props);
    const { _id, name, price, quantity, img } = props.product;
    return (
        <div className="product slit-in-vertical">
            <img src={img} alt="" />
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => { props.remove(_id) }} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;