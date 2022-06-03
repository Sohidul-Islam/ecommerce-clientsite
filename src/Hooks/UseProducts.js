import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log("Product Recieved");
            })
    }, [])
    return (
        [products]
    );
};

export default UseProducts;