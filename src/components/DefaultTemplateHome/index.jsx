import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplateHome = ({ children }) => {
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}