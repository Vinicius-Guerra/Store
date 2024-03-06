import { DefaultTemplateHome } from "../../components/DefaultTemplateHome"
import { FeaturedProducts } from "../../components/FeaturedProducts"
import { FirstContentHome } from "../../components/FirstContentHome"

export const HomePage = () => {
    return (
        <>
            <DefaultTemplateHome>
                <FirstContentHome />
                <FeaturedProducts />
            </DefaultTemplateHome>
        </>
    )
}