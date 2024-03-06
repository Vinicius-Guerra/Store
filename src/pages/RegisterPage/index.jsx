import { Footer } from "../../components/Footer";
import { HeaderRegister } from "../../components/HeaderRegister";
import { MainRegister } from "../../components/MainRegister";

export const RegisterPage = () => {
    return (
        <>
            <HeaderRegister />
            <main>
                <MainRegister />
            </main>
            <Footer />
        </>
    )
}