import React, { useEffect, useState } from 'react';
import { getItemFromLocalDb } from '../utilities/fakedb';
import UseProducts from './UseProducts';

const UseCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (products.length) {
            const addedProducts = getItemFromLocalDb();
            // console.log("from useCart", addedProducts, " and products ", products);
            let newCart = [];
            for (const id in addedProducts) {
                // console.log("ids in useCart", id);
                const quantity = addedProducts[id];
                const savedProduct = products.find(product => product.id === id);
                // console.log("savedProduct: ", savedProduct);

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