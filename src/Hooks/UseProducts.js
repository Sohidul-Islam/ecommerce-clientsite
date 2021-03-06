import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        // let url = `https://marvelous-dry-tortugas-02221.herokuapp.com/`;
        let url = `http://localhost:5000/`;
        await fetch(`${url}products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);

                // console.log("Product Recieved useProducts", data.products);
            })
    }
    return [products, setProducts]

};

export default UseProducts;