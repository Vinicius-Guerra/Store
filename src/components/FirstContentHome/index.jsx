import style from "./style.module.scss";
import contentHome from "../../assets/contentHome.svg";

export const FirstContentHome = () => {
    return(
        <section className={style.container}>
            <img src={contentHome} alt="Três garotas estilosas felizes com fundo marrom" />
            <div>
                <h1 className="title1">Kenzie fashion store</h1>
                <button className="paragraph">Confira as ofertas</button>
            </div>
        </section>
    )
}