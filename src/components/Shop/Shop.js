import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
import { addToDb, deleteShoppingCart, getItemFromLocalDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import UseCart from '../../Hooks/UseCart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const handleAddtoCart = (product) => {
        // console.log(product);
        const newProduct = [...cart, product];
        setCart(newProduct);
        addToDb(product.id)
    }

    useEffect(() => {
        // console.log("useEffect 1 ");
        fetch("./products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchData(data)
                // console.log("Product Recieved");

            })

        // console.log(products);
    }, []);

    useEffect(() => {
        // console.log("useEffect 2 ");
        const newCart = [];
        if (products.length) {
            const addedProducts = getItemFromLocalDb();
            // console.log(addedProducts);
            for (const id in addedProducts) {
                const quantity = addedProducts[id];
                const savedProduct = products.find(product => product.id === id);

                for (let i = 0; i < quantity; i++) {
                    newCart.push(savedProduct);
                }
                // console.log("Quantity: ", quantity);
                // console.log("saved product: ", savedProduct);

            }

            // console.log("New cart: ", newCart);
            setCart(newCart);
        }

    }, [products])
    const purchase = () => {
        deleteShoppingCart();
        const newCart = [];
        setCart(newCart);
    }

    const handleSearchBar = (e) => {
        const searchText = e.target.value;
        // console.log(searchText);
        const searchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchData(searchedProducts)
        // console.log(searchedProducts.length);
    }
    return (
        <div>
            <div className="search-container">
                <input onChange={handleSearchBar} className="searchbar" type="text" placeholder="Search here" />
                <span style={{ color: "white", marginLeft: "16px" }}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>{cart.length}</span>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h2>Products: {searchData.map((product, key) => <Product handleAddtoCart={handleAddtoCart} key={product.id} product={product}></Product>)}</h2>
                </div>
                <div className="cart-container">
                    <Cart purchase={purchase} cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Shop;