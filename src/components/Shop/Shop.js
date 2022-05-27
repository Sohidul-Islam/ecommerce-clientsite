import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddtoCart = (product) => {
        // console.log(product);
        const newProduct = [...cart, product];
        setCart(newProduct);
    }
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data))

        console.log(products);
    }, [])
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Products: {products.map((product, key) => <Product handleAddtoCart={handleAddtoCart} key={product.id} product={product}></Product>)}</h2>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;