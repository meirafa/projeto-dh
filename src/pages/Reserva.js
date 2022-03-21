import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TitleBgBlack from "./components/titles/TitleBgBlack";
// import InputReservation from "./components/forms/InputReservation";
import Reservation from "./components/Reservation";

function Reserva() {
    const title = { span: "informações da sua reserva", title: "reserva" }
    return (
        <>
            <Helmet>
                <title>DB | Reserva</title>
            </Helmet>
            <main>
                <section className="titulo-bg">
                    <div className="container">
                        <TitleBgBlack {...title} />

                    </div>

                </section>

                <Reservation/>
                {/* <div className="reserve-box  ">
                    <div className="reserve-cal">
                        <InputReservation />
                    </div>

                    <div className="reserve-btn">
                        <p>Faça já sua reserva</p>
                        <button className="botao">Reservar</button>
                    </div>

                    <span className="termos-link"><Link to="/termos">Nossos Termos</Link></span>
                </div> */}
            </main>
        </>
    )
}

export default Reserva;

{/* <form className="reserva" action="/reserva">
    <div className="reserva-produto">
        <h2 className="font-text-2 cor-1">Alugueis:</h2>

        <input type="radio" name="tipo" value="bikcraft" id="bikcraft"/>
        <label for="bikcraft">Categorias:</label>

        <input type="radio" name="tipo" value="seguro" id="seguro"/>
        <label for="seguro">Entrega:</label>

        <div className="reserva-conteudo" id="reserva-bikcraft">
            <h2 className="font-text-2 cor-1">Escolha a sua</h2>

            <input type="radio" name="produto" value="suv" id="suv"/>
            <label for="suv">SUVs <span>R$ 299.9</span></label>
            <div className="reserva-detalhes">
                <ul className="font-text-2 cor-3">
                    <li><img src="/img/icones/eletrica.svg" alt=""/> Motor Elétrico</li>
                    <li><img src="/img/icones/carbono.svg" alt=""/> Fibra de Carbono</li>
                    <li><img src="/img/icones/velocidade.svg" alt=""/> 50 km/h</li>
                    <li><img src="/img/icones/rastreador.svg" alt=""/> Rastreador</li>
                </ul>
                <img src="/img/carros/suv-1.jpg" alt="Modelo Suv"/>
            </div>

            <input type="radio" name="produto" value="conversivel" id="conversivel"/>
            <label for="conversivel">Conversiveis<span>R$ 499.9</span></label>
            <div className="reserva-detalhes">
                <ul className="font-text-2 cor-3">
                    <li><img src="/img/icones/eletrica.svg" alt=""/> Motor Elétrico</li>
                    <li><img src="/img/icones/carbono.svg" alt=""/> Fibra de Carbono</li>
                    <li><img src="/img/icones/velocidade.svg" alt=""/> 45 km/h</li>
                    <li><img src="/img/icones/rastreador.svg" alt=""/> Rastreador</li>
                </ul>
                <img src="/img/carros/conversivel-1.jpg" alt="Modelo Conversivel"/>
            </div>

            <input type="radio" name="produto" value="picape" id="picape"/>
            <label for="picape">Picapes <span>R$ 399.9</span></label>
            <div className="reserva-detalhes">
                <ul className="font-text-2 cor-3">
                    <li><img src="/img/icones/eletrica.svg" alt=""/> Motor Elétrico</li>
                    <li><img src="/img/icones/carbono.svg" alt=""/> Fibra de Carbono</li>
                    <li><img src="/img/icones/velocidade.svg" alt=""/> 40 km/h</li>
                    <li><img src="/img/icones/rastreador.svg" alt=""/> Rastreador</li>
                </ul>
                <img src="/img/carros/picape-1.jpg" alt="Modelo Picape"/>
            </div>

            <input type="radio" name="produto" value="esportivo" id="esportivo"/>
            <label htmlFor="esportivo">Esportivos <span>R$ 399.9</span></label>
            <div className="reserva-detalhes">
                <ul className="font-text-2 cor-3">
                    <li><img src="/img/icones/eletrica.svg" alt=""/> Motor Elétrico</li>
                    <li><img src="/img/icones/carbono.svg" alt=""/> Fibra de Carbono</li>
                    <li><img src="/img/icones/velocidade.svg" alt=""/> 40 km/h</li>
                    <li><img src="/img/icones/rastreador.svg" alt=""/> Rastreador</li>
                </ul>
                <img src="../img/carros/esportivo-1.jpg" alt="Modelo Esportivo"/>
            </div>

        </div>

        <div className="reserva-conteudo" id="reserva-seguro">
            <h2 className="font-text-2 cor-1">Modalidade de entrega:</h2>

            <input type="radio" name="produto" value="prata" id="prata"/>
            <label for="prata">Entrega na residencia <span>R$ 199.9</span></label>

            <input type="radio" name="produto" value="ouro" id="ouro"/>
            <label for="ouro">Entrega com motorista <span>R$ 299.9</span></label>
        </div>
    </div>
    <div className="reserva-dados form">
        <h2 className="font-text-2 cor-2 col-2">Informações da reserva</h2>
        {/*TEXTO*/}
{/* <button className="botao col-2">Finalizar Reserva</button>
    </div>
</form> */}