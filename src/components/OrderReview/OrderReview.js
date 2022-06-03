import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProducts from '../../Hooks/UseProducts';
import Product from '../Product/Product'

const OrderReview = () => {
    const [products, setProducts] = UseProducts([]);
    const [cart, setCart] = UseCart(products);
    let TotalQuantity = 0;
    for (const c of cart) {
        console.log("c: ", c);
        TotalQuantity += c.quantity;
    }
    return (
        <div>
            <h2>{products.length} OrderReview</h2>
            <h2>{TotalQuantity} items has been ordered</h2>
            {cart.map(prod => <Product product={prod}></Product>)}
        </div>
    );
};

export default OrderReview;