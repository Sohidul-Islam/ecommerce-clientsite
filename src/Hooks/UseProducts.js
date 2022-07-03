import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        await fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);

                // console.log("Product Recieved useProducts", data.products);
            })
    }
    return [products, setProducts]

};

export default UseProducts;