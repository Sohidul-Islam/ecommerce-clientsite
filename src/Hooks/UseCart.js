import React, { useEffect, useState } from 'react';
import { getItemFromLocalDb } from '../utilities/fakedb';


const UseCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {


        const addedProducts = getItemFromLocalDb();
        console.log("addedProducts", addedProducts);
        const productKeys = Object.keys(addedProducts);
        console.log("productKeys", productKeys);
        let newCart = [];
        // let url = `https://marvelous-dry-tortugas-02221.herokuapp.com/`;
        let url = `http://localhost:5000/`;
        fetch(`${url}products/byKeys`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(products => {
                console.log("Product useCart: ", products);
                if (products.length) {
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

            }).catch(err => {
                console.log(err.message);
            })
    }, [])

    return [cart, setCart];
};

export default UseCart;