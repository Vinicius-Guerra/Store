import imageAddCart from "../../../assets/add_cart.svg";
import style from "./style.module.scss";

export const CardKnowMore = () => {
    return (
        <div className={style.container}>
            <button>
                <img src={imageAddCart} alt="Botão de adicionar ao carrinho" />
            </button>
            <p>Saiba mais</p>
        </div>
    )
}