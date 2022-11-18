import { useContext } from "react"
import { ProductsContext } from "../context/ProductsProvider";
const useProductsContext = () => {
    return useContext(ProductsContext);
}
export default useProductsContext;