import Cart from "../../assets/shopping_cart.svg";
import Logo from "../../assets/FAshionSTORE.svg";
import style from "./style.module.scss";

export const Header = () => {
    return(
        <header className={style.container}>
            <img className={style.logo} src={Logo} alt="Logotipo fashion store" />
            <button>
                <img src={Cart} alt="Botão para acionar carrinho" />
            </button>
        </header>
    )
}