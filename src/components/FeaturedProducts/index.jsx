import { CardProducts } from "../CardProducts"
import style from "./style.module.scss";

export const FeaturedProducts = () => {
    return (
        <section>
            <h2 className="title2">Produtos em destaque</h2>
            <CardProducts />
        </section>
    )
}