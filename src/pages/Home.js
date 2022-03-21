import Categoria from "./components/Categoria";
import {Helmet} from "react-helmet-async";
import Populars from "./components/Populars";
import TitleBgBlack from "./components/titles/TitleBgBlack";
import Marca from "./components/Marca";
import InputDate from "./components/forms/InputDate";
import InputDateTime from "./components/forms/InputDateTime";
import InputSelect from "./components/forms/InputSelect";

function Home() {
    const title = {span: "a melhor experiência de luxo de aluguel de carros", title: "faça já sua reserva"}
    return (
        <>
            <Helmet>
                <title>Digital Booking - Luxury Cars</title>
            </Helmet>
            <main>
                <div className="introducao-bg">
                </div>

                <article className="bg-black">
                    <div className="container">
                        <TitleBgBlack {...title}/>
                        <div className="form form-home">
                            <InputSelect/>
                            {/*<input type="text" id="local" name="local" placeholder="Local"/>*/}
                            <InputDateTime/>
                            {/*<InputDate/>*/}
                            <input type="submit" className="botao" value="CONSULTAR"/>
                        </div>

                    </div>
                </article>


                <Categoria/>

                <Populars/>

                <Marca/>
            </main>
        </>
    )
}

export default Home;