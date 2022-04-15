import Categoria from "./components/Categoria";
import {Helmet} from "react-helmet-async";
import Populars from "./components/Populars";
import Marca from "./components/Marca";
import {ComponentInputHome} from "./components/forms/ComponentInputHome";

function Home() {
    return (
        <>
            <Helmet>
                <title>Digital Booking - Luxury Cars</title>
            </Helmet>
            <main>
                <div className="introducao-bg">
                </div>

                <ComponentInputHome/>

                <Categoria/>

                <Populars/>

                <Marca/>
            </main>
        </>
    )
}

export default Home;