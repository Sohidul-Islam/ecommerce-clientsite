import React, { useEffect, useState } from 'react';
import { getItemFromLocalDb } from '../utilities/fakedb';
import UseProducts from './UseProducts';

const UseCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (products.length) {
            const addedProducts = getItemFromLocalDb();
            let newCart = [];
            for (const id in addedProducts) {
                const quantity = addedProducts[id];
                const savedProduct = products.find(product => product._id === id);
                console.log("Saved product quantity: ", quantity);
                console.log("Saved product: ", savedProduct);
                if (savedProduct) {
                    savedProduct.quantity = quantity;
                    newCart.push(savedProduct);
                }
                console.log("cart changed ", newCart);
            }
            setCart(newCart);
        }


    }, [products])

    return [cart, setCart];
};

export default UseCart;