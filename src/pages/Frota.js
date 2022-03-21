import {Link} from "react-router-dom";
import Marca from "./components/Marca";
import {Helmet} from "react-helmet-async";
import TitleBgBlack from "./components/titles/TitleBgBlack";
import ListCategories from "./components/cards/ListCategories";

function Categorias() {
    const title = {span: "Escolha o melhor para você", title: "nossas categorias"}
    return (
        <>
            <Helmet>
                <title>DB | Categorias</title>
            </Helmet>
            <main>
                <section className="titulo-bg">
                    <div className="container">
                        <TitleBgBlack {...title}/>
                    </div>
                    <div className="container-categorias">
                        <ListCategories/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Categorias;