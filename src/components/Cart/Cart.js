import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;
    let totals = 0;
    // const cart.reduce(function (prev, new ) {

    // })
    for (const product of cart) {
        totals += product.price;
    }
    return (
        <div>
            <h2>Order Summery</h2>
            <h2>Item Ordered: {cart.length}</h2>
            <h2>Total: {totals}</h2>
        </div>
    );
};

export default Cart;