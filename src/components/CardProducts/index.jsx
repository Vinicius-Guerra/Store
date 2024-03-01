import { useProductsContext } from "../../providers/ProductsContext";
import { CardKnowMore } from "./CardKnowMore";
import style from "./style.module.scss";

export const CardProducts = () => {
    const productsList  = useProductsContext();
    
    return (
        <ul>
            {productsList.map(product => (
                <li key={product.id} className={style.container}>
                    <figure>
                        <img src={product.image} alt={`imagem de ${product.name}`} />
                    </figure>
                    <h3 className="title4">{product.name}</h3>
                    <p className="price small">{`R$ ${product.price},00`}</p>
                    <CardKnowMore />
                </li>
            ))}
        </ul>
    );
};