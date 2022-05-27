import React from 'react';
import "./Product.css"
const Product = (props) => {
    // console.log(props);
    const { id, name, price, seller, img, stock } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-details">
                <h2>{name}</h2>
                <p><small>by: {seller}</small></p>
                <p>by: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddtoCart(props.product)} className="btn-regular">add to cart</button>
            </div>

        </div>
    );
};

export default Product;