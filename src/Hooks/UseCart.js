import React, { useEffect, useState } from 'react';
import { getItemFromLocalDb, QuantityHandlerFromLocalDb } from '../utilities/fakedb';


const UseCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const addedProducts = getItemFromLocalDb();
        const productKeys = Object.keys(addedProducts);
        let newCart = [];
        // let url = `https://node-express-mongo-react-server.vercel.app/`;
        let url = `http://node-express-mongo-react-server.vercel.app/`;
        fetch(`${url}products/byKeys`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(products => {
                if (products.length) {
                    for (const id in addedProducts) {
                        const quantity = addedProducts[id];
                        const savedProduct = products.find(product => product._id === id);
                        if (savedProduct) {
                            savedProduct.quantity = quantity;
                            newCart.push(savedProduct);
                        }
                    }
                    setCart(newCart);
                }

            }).catch(err => {
                console.log(err.message);
            })
    }, [])


    const handleQuantity = (id, quantity) => { // key is product id
        const newCart = [...cart];
        const product = newCart.find(product => product._id === id);
        if (product) {
            product.quantity = quantity;
            QuantityHandlerFromLocalDb(id, quantity);
            // setCart(newCart);
        }
    }

    return [cart, setCart, handleQuantity];
};

export default UseCart;