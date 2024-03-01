import React from "react";
import { useProductsContext } from "../../providers/ProductsContext"

export const CardProducts = () => {
    const productsList  = useProductsContext();
    
    return (
        <ul>
            {productsList.map(product => (
                <li key={product.id}>
                    <figure>
                        <img src={product.image} alt={`imagem de ${product.name}`} />
                    </figure>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </li>
            ))}
        </ul>
    );
};