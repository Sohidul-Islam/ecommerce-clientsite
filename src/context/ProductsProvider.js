import React, { createContext } from 'react';
import UseProducts from '../Hooks/UseProducts';
export const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
    const allProducts = UseProducts();
    // console.log("all products", allProducts);
    return (
        <div>
            <ProductsContext.Provider value={allProducts}>
                {children}
            </ProductsContext.Provider>
        </div>
    );
};

export default ProductsProvider;