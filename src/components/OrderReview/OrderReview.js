import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import UseCart from '../../Hooks/UseCart';
import UseProducts from '../../Hooks/UseProducts';
import { deleteShoppingCart, QuantityHandlerFromLocalDb, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import useProductsContext from './../../Hooks/useProductContext';

const OrderReview = () => {
    const [products] = useProductsContext();
    const [cart, setCart] = UseCart(products);
    // const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    console.log("Cart in order review ", cart);
    const removeHandler = (key) => {
        const deleteCart = cart.filter(product => product._id !== key);
        setCart(deleteCart);
        removeFromDb(key);
    }
    const handleQuantity = (id, quantity) => { // key is product id
        const newCart = [...cart];
        const product = newCart.find(product => product._id === id);
        if (product) {
            product.quantity = quantity;
            QuantityHandlerFromLocalDb(id, quantity);
            setCart(newCart);
        }
    }
    const purchase = () => {
        if (cart.length > 0) {
            // navigate("/placeorder", { replace: true });
            navigate("/shipping", { replace: true });
            // deleteShoppingCart();
            // const newCart = [];
            // setCart(newCart);
        }


    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {cart.length ? cart.map(product => <ReviewItem key={product._id} fn={[removeHandler, handleQuantity]} product={product}></ReviewItem>) : <h2>Not Item Found</h2>}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button onClick={purchase} className="btn-regular">Purchase</button>
                        <br />
                        {cart.length == 0 && <Link to="/shop" className="text-danger"><h5>Please Choose Your Item</h5></Link>}

                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;