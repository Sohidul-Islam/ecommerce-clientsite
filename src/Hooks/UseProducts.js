import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        await fetch("https://rugged-hot-springs-18854.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);

                // console.log("Product Recieved useProducts", data.products);
            })
    }
    return [products, setProducts]

};

export default UseProducts;