import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";
import { addToDb, deleteShoppingCart, getItemFromLocalDb, getItemFromLocalDbByID } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import UseCart from './../../Hooks/UseCart';
import useProductsContext from '../../Hooks/useProductContext';
const Shop = () => {
    const [products] = useProductsContext();
    const [productsWithPage, setProductsWithPage] = useState([]);
    const [cart, setCart] = UseCart(productsWithPage);
    const [searchData, setSearchData] = useState([]);
    const [pageNumber, setPageNumber] = useState([]);
    const [searchBoxEmpty, setSearchBoxEmpty] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState("All");
    const [currentPage, setCurrentPage] = useState(0);
    const size = 10;
    console.log("products", productsWithPage);
    const handleAddtoCart = (product) => {
        let newProduct = []
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
        // let url = `https://marvelous-dry-tortugas-02221.herokuapp.com/`;
        
        let url = `http://localhost:5000/`;
        url += `product/categories`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newCategory = ["All", ...data];
                setCategories(newCategory);
            })

    }, [])

    useEffect(() => {
        // let url = `https://marvelous-dry-tortugas-02221.herokuapp.com/`;
        let category = JSON.parse(localStorage.getItem('category'));
        let tmpCategory;
        
        console.log(category,"choosen");

         for(let x in category){
            if(category[x]===1){
                tmpCategory = x;
                category[x]=0;
            }
         }
         console.log(tmpCategory===1,"is equalt to 1");
        

        let url = `http://localhost:5000/`;
        if(tmpCategory){
            url += `products?page=${currentPage}&&size=${size}&&category=${tmpCategory}`;
            setSelectedCategories(tmpCategory);
        }
        else if (selectedCategories !== "All") {
            url += `products?page=${currentPage}&&size=${size}&&category=${selectedCategories}`;
        }
        else {
            url += `products?page=${currentPage}&&size=${size}`;
        }

        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.products.length > 0) {
                    setSearchData(data.products)
                    setProductsWithPage(data.products)
                    const count = data.count;
                    const page = Math.ceil(count / size);
                    setPageNumber(page);
                    localStorage.setItem('category', JSON.stringify(category));
                }
                else {
                    console.log("No Products");
                }
            }).catch(err => {
                console.log(err.message);
                const oldData = productsWithPage;
                setSearchData(oldData)
                setProductsWithPage(oldData)

            })
    }, [currentPage, selectedCategories]);

    // useEffect(() => {
    //     const newCart = [];
    //     if (products.length) {
    //         const addedProducts = getItemFromLocalDb();
    //         for (const id in addedProducts) {
    //             const quantity = addedProducts[id];
    //             const savedProduct = products.find(product => product._id === id);
    //             savedProduct.quantity = quantity;
    //             newCart.push(savedProduct);
    //         }

    //         console.log("New cart: ", newCart);
    //         setCart(newCart);
    //     }

    // }, [])


    const handleSearchBar = (e) => {
        const searchText = e.target.value;
        // let count, page;
        if (searchText.length > 0) {
            const searchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
            setSearchData(searchedProducts)
            setSearchBoxEmpty(false);
        }
        else {
            setSearchData(productsWithPage);
            setSearchBoxEmpty(true);
        }
        // console.log("count and page: ", count, page);
    }

    const handleCategory = (category) => {
        // let url = `https://marvelous-dry-tortugas-02221.herokuapp.com/`;
        setSelectedCategories(category);
        // let url = `http://localhost:5000/`;
        // if (category !== "All") {
        //     url += `product/categories/category?category=${category}`;
        //     console.log(url);
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             setSearchData(data);
        //             setSearchBoxEmpty(false);
        //         }
        //         )
        // }
        // else {
        //     setSearchData(productsWithPage);
        //     setSearchBoxEmpty(true);
        // }

    }
    return (
        <div>
            <div className="search-container">
                <div class="dropdown">
                    <button class="dropbtn">Categories</button>
                    <div class="dropdown-content">
                        {/* <a className="category-active" onClick={() => { setSearchData(productsWithPage); setSearchBoxEmpty(true) }} href="#">All</a> */}
                        {
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            categories.map((category, key) => <a className={selectedCategories === category ? "category-active" : "category-not-active"} keys={key}
                                onClick={() => {
                                    // setSelectedCategories(category);
                                    handleCategory(category);
                                }} href="#">{category}</a>)
                        }
                    </div>
                </div>
                <input onChange={handleSearchBar} className="searchbar" type="text" placeholder="Search here" />
                <span style={{ color: "white", marginLeft: "16px" }}><FontAwesomeIcon style={{ fontSize: "16px" }} icon={faCartShopping}></FontAwesomeIcon>{cart.reduce((previous, current) => previous + current.quantity, 0)}</span>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {searchData.length > 0 ? <>
                        <h2>Products: {searchData.map((product, key) => <Product handleAddtoCart={handleAddtoCart} key={product._id} product={product}></Product>)}</h2>

                        {searchBoxEmpty && <div className="pagination">
                            {[...Array(pageNumber).keys()].map(num => <button key={num}
                                className={currentPage === num ? "selected" : "not-selected"} onClick={() => setCurrentPage(num)} style={{ marginRight: "8px" }}>{num + 1}</button>
                            )}
                        </div>}
                    </> :
                        <div className="spinner-grow" style={{ width: "10rem", height: "10rem", margin: "25% 25%" }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }
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