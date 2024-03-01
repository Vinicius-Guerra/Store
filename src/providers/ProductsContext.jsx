import { useContext, useEffect, useState } from "react";
import { createContext } from "react"
import { api } from "../services/api";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await api.get("/products");
                setProductsList(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [])

    return(
        <ProductsContext.Provider value={productsList}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext);