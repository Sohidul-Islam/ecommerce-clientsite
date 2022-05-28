import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
// const element = <FontAwesomeIcon icon={faCoffee} />
const Product = (props) => {
    // console.log(props);
    const { id, name, price, seller, img, stock } = props.product;
    return (
        <div className="product slit-in-vertical">
            <img src={img} alt="" />
            <div className="product-details">
                <h2>{name}</h2>
                <p><small>by: {seller}</small></p>
                <p>by: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddtoCart(props.product)} className="btn-regular">{<FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "8px" }} />}add to cart</button>
            </div>

        </div>
    );
};

export default Product;