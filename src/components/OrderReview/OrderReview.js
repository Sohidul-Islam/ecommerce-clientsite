import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProducts from '../../Hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = UseProducts([]);
    const [cart, setCart] = UseCart(products);
    const removeHandler = (key) => {
        // console.log("Deleted key: ", key);
        const deleteCart = cart.filter(product => product.id !== key);
        // console.log("new cart: ", deleteCart);
        setCart(deleteCart);
        removeFromDb(key);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {cart.length ? cart.map(product => <ReviewItem key={product.id} remove={removeHandler} product={product}></ReviewItem>) : <h2>Not Item Found</h2>}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default OrderReview;