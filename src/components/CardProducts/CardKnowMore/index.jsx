import {imageAddCart} from "../../../assets/add_shopping_cart.svg";

export const CardKnowMore = () => {
    return (
        <div>
            <button>
                <img src={imageAddCart} alt="Botão de adicionar ao carrinho" />
            </button>
            <p>Saiba mais</p>
        </div>
    )
}