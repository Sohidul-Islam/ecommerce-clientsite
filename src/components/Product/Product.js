import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
import Rating from 'react-rating';
// const element = <FontAwesomeIcon icon={faCoffee} />
const Product = (props) => {
    // console.log(props);
    const { id, name, price, seller, img, stock, ratings, quantity } = props.product;
    return (
        <div className="product slit-in-vertical">
            <img src={img} alt="" />
            <div className="product-details">
                <h2>{name}</h2>
                <p><small>by: {seller}</small></p>
                <p>by: ${price}</p>
                {quantity > 0 && <p>Quantity: {quantity}</p>}
                <p><small>only {stock} left in stock - order soon rating: {ratings}</small></p>

                <Rating onChange={(value) => console.log("rating: ", value)} emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color" initialRating={ratings} readonly ></Rating>
                <br></br>
                <button onClick={() => props.handleAddtoCart(props.product)} className="btn-regular">{<FontAwesomeIcon icon={faCartShopping} style={{
                    marginRight: "8px"
                }} />}add to cart</button>
            </div>

        </div>
    );
};

export default Product;