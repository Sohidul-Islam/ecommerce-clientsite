import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const { cart, purchase } = props;
    const total = cart.reduce((previous, current) => previous + current.price, 0)
    const shipping = total > 0 ? 55 : 0;
    const tax = (total + shipping) * .15;
    const grandTotal = total + shipping + tax;


    return (
        <div>
            <h2><strong>Order Summery</strong></h2>
            <p><strong>Item Ordered:</strong> {cart.length}</p>
            <p><strong>Total:</strong> {total.toFixed(2)}</p>
            <p><strong>Shipping:</strong> {shipping.toFixed(2)}</p>
            <p><strong>Before Tax:</strong> {(shipping + total).toFixed(2)}</p>
            <p><strong>Tax:</strong> {tax.toFixed(2)}</p>
            <p><strong>Grand Total:</strong> {grandTotal.toFixed(2)}</p>
            <button onClick={purchase} className="btn-regular">Purchase</button>
        </div>
    );
};

export default Cart;