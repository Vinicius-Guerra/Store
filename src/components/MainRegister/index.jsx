import imgRegister from "../../assets/img_register.svg";
import { SectionRegister } from "../SectionRegister";
import style from "./style.module.scss";

export const MainRegister = () => {
    return (
        <section className={style.container}>
            <div>
                <img src={imgRegister} alt="Imagem ilustrativa de duas garotas estilosas" />
            </div>

            <SectionRegister />
        </section>
    )
}