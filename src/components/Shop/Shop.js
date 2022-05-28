import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
import { addToDb, deleteShoppingCart, getItemFromLocalDb } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddtoCart = (product) => {
        // console.log(product);
        const newProduct = [...cart, product];
        setCart(newProduct);
        addToDb(product.id)
    }
    useEffect(() => {
        console.log("useEffect 1 ");
        fetch("./products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log("Product Recieved");
            })

        console.log(products);
    }, []);

    useEffect(() => {
        console.log("useEffect 2 ");
        const newCart = [];
        if (products.length) {
            const addedProducts = getItemFromLocalDb();
            console.log(addedProducts);
            for (const id in addedProducts) {
                const quantity = addedProducts[id];
                const savedProduct = products.find(product => product.id === id);

                for (let i = 0; i < quantity; i++) {
                    newCart.push(savedProduct);
                }
                console.log("Quantity: ", quantity);
                console.log("saved product: ", savedProduct);
            }

            console.log("New cart: ", newCart);
            setCart(newCart);
        }

    }, [products])
    const purchase = () => {
        deleteShoppingCart();
        const newCart = [];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Products: {products.map((product, key) => <Product handleAddtoCart={handleAddtoCart} key={product.id} product={product}></Product>)}</h2>
            </div>
            <div className="cart-container">
                <Cart purchase={purchase} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;