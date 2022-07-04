import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
import { addToDb, deleteShoppingCart, getItemFromLocalDb, getItemFromLocalDbByID } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import UseCart from './../../Hooks/UseCart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = UseCart(products);
    const [searchData, setSearchData] = useState([]);
    const [pageNumber, setPageNumber] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const size = 10;
    const handleAddtoCart = (product) => {
        // console.log(product);
        let newProduct = []
        // if (getItemFromLocalDbByID(product.id)) {
        //     console.log("ho paisi");
        //     product.quantity += 1;
        // } else {
        //     console.log("nare painai");
        //     product.quantity = 1;
        //     newProduct = [...cart, product];
        // }
        const exists = cart.find(pd => pd._id === product._id);
        if (exists) {
            const rest = cart.filter(pd => pd._id !== product._id);
            exists.quantity += 1;
            newProduct = [...rest, exists];
        }
        else {
            product.quantity = 1;
            newProduct = [...cart, product];
        }
        setCart(newProduct);
        addToDb(product._id)

    }

    useEffect(() => {
        const url = `http://localhost:5000/products?page=${currentPage}&&size=${size}`;

        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("Product Recieved", data);
                setSearchData(data.products)
                setProducts(data.products)
                console.log("Product Recieved");
                const count = data.count;
                const page = Math.ceil(count / size);
                console.log("page", page);
                setPageNumber(page);

            }).catch(err => {
                console.log(err.message);
            })
    }, [currentPage]);

    useEffect(() => {
        const newCart = [];
        if (products.length) {
            const addedProducts = getItemFromLocalDb();
            for (const id in addedProducts) {
                const quantity = addedProducts[id];
                const savedProduct = products.find(product => product._id === id);
                savedProduct.quantity = quantity;
                newCart.push(savedProduct);
            }

            console.log("New cart: ", newCart);
            setCart(newCart);
        }

    }, [])


    const handleSearchBar = (e) => {
        const searchText = e.target.value;
        // console.log(searchText);
        const searchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchData(searchedProducts)
    }
    return (
        <div>
            <div className="search-container">
                <input onChange={handleSearchBar} className="searchbar" type="text" placeholder="Search here" />
                <span style={{ color: "white", marginLeft: "16px" }}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>{cart.reduce((previous, current) => previous + current.quantity, 0)}</span>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h2>Products: {searchData.length > 0 && searchData.map((product, key) => <Product handleAddtoCart={handleAddtoCart} key={product._id} product={product}></Product>)}</h2>

                    <div className="pagination">
                        {[...Array(pageNumber).keys()].map(num => <button key={num}
                            className={currentPage === num ? "selected" : "not-selected"} onClick={() => setCurrentPage(num)} style={{ marginRight: "8px" }}>{num}</button>
                        )}
                    </div>
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/order-review">
                            <button className="btn-regular">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>

    );
};

export default Shop;