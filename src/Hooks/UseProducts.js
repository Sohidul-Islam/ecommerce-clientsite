import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        // let url = `https://node-express-mongo-react-server.vercel.app/`;
        let url = `http://node-express-mongo-react-server.vercel.app/`;
        await fetch(`${url}products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
    }
    return [products, setProducts]

};

export default UseProducts;