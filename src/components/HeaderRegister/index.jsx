import Logo from "../../assets/FAshionSTORE.svg";
import style from "./style.module.scss";

export const HeaderRegister = () => {
    return(
        <header className={style.container}>
            <img src={Logo} alt="Logotipo fashion store" />
        </header>
    )
}