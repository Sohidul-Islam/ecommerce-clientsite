import { useContext } from "react"
import { ProductsContext } from "../context/ProductsProvider";
const useProductsContext = () => {
    // console.log("ami contexte achi ", useContext(ProductsContext));
    return useContext(ProductsContext);
}
export default useProductsContext;