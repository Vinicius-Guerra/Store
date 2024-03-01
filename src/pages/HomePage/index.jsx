import { FeaturedProducts } from "../../components/FeaturedProducts"
import { FirstContentHome } from "../../components/FirstContentHome"
import { Header } from "../../components/Header"

export const HomePage = () => {
    return (
        <>
            <Header />
            <FirstContentHome />
            <FeaturedProducts />
        </>
    )
}