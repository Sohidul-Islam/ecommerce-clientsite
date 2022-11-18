import React from 'react';
import { useState } from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { _id, name, price, quantity, img, stock } = props.product;
    const [remove, handleQuantity] = props.fn;
    const [newquantity, setNewquantity] = useState(quantity);
    const handleIncrement = () => {
        if (newquantity < stock) {
            setNewquantity(newquantity + 1);
            handleQuantity(_id, newquantity + 1);
        }
    }
    const handleDecrement = () => {
        if (newquantity !== 1) {
            console.log("Decrement", newquantity);
            setNewquantity(newquantity - 1);
            handleQuantity(_id, newquantity - 1);
        }
    }
    return (
        <div className="product slit-in-vertical">
            <img src={img} alt="" />
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <div className="quantity-box">
                    <button className="quantity-btn" onClick={handleIncrement}>+</button>
                    <input className="quantity-input" type="number" min="1" max={stock} value={newquantity} disabled={true} />
                    <button className="quantity-btn" onClick={handleDecrement}>-</button>
                </div>

                <br />

                <button onClick={() => { remove(_id) }} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;