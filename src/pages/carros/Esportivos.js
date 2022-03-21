import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet-async";
import TitleBgBlack from "../components/titles/TitleBgBlack";
import ListCategory from "../components/cards/ListCategory";
import Vantagem from "../components/Vantagem";

function Esportivos() {
    const title = {span: "R$ 399.90", title: "Esportivos"};

    return (
        <>
            <Helmet>
                <title>DB | Categoria > Esportivos</title>
            </Helmet>

            <main>
                <section className="bg-black">
                    <div className="bg-image">
                        <div className="container">
                            <TitleBgBlack {...title}/>

                            <div className="carro">
                                <div className="carro-imagens">

                                    <img src="../img/carros/conversivel-1.jpg" alt=""/>


                                    <img src="../img/carros/conversivel-2.jpg" alt=""/>
                                    <img src="../img/carros/conversivel-3.jpg" alt=""/>


                                    <img src="../img/carros/conversivel-2.jpg" alt=""/>
                                    <img src="../img/carros/conversivel-3.jpg" alt=""/>


                                </div>
                                <div className="carro-conteudo">
                                    <p className="font-h3 cor-1">Carros que prezam pelo conforto e luxo, para uma
                                        experiência na
                                        direção incomparável, e sensação de liberdade.</p>
                                    <div className="carro-comprar">
                                        <Link className="botao" to="/reserva">Alugar Agora</Link>
                                    </div>

                                    <h2 className="font-text-2 cor-0">Características</h2>
                                    <ul className="carro-ficha font-text-1 cor-4">
                                        <li><p className="font-text-1 cor-1">Motor</p> <span>9 kg</span></li>
                                        <li><p className="font-text-1 cor-1">Motor</p> <span>60 cm</span></li>
                                        <li><p className="font-text-1 cor-1">Motor</p>  <span>120 cm</span></li>
                                        <li><p className="font-text-1 cor-1">Motor</p>  <span>10 cm</span></li>
                                        <li><p className="font-text-1 cor-1">Motor</p>  <span>16</span></li>
                                        <li><p className="font-text-1 cor-1">Motor</p>  <span>29</span></li>
                                    </ul>

                                    <h2 className="font-text-2 cor-0">Informações</h2>
                                    <ul className="carro-informacoes">
                                        <li>
                                            <img src="../img/icones/motor.png" alt=""/>
                                            <h3 className="font-h4 cor-0">Motor Elétrico</h3>
                                            <p className="font-text-1 cor-1">Permite você viajar distâncias
                                                inimaginaveis
                                                com a
                                                sua
                                                bike.</p>
                                        </li>
                                        <li>
                                            <img src="../img/icones/velocidade.svg" alt=""/>
                                            <h3 className="font-h4 cor-0">40 km/h</h3>
                                            <p className="font-text-1 cor-1">A mais rápida carro elétrica disponível
                                                hoje no
                                                mercado.</p>
                                        </li>
                                        <li>
                                            <img src="../img/icones/rastreador.svg" alt=""/>
                                            <h3 className="font-h4 cor-0">Rastreador</h3>
                                            <p className="font-text-1 cor-1">Rastreador e sistema anti-furto para
                                                garantir o
                                                seu
                                                sossego.</p>
                                        </li>
                                        <li>
                                            <img src="../img/icones/carbono.svg" alt=""/>
                                            <h3 className="font-h4 cor-0">Fibra de Carbono</h3>
                                            <p className="font-text-1 cor-1">Maior proteção possível para a sua digitalbooking
                                                com
                                                fibra
                                                de
                                                carbono.</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <article className="carros-lista">
                    <div className="container">
                        <h2 className="font-h1">escolha outras categorias<span className="cor-l1">.</span></h2>

                        <ul>
                            <ListCategory/>
                        </ul>
                    </div>
                </article>
                <Vantagem/>
            </main>
        </>
    )
}

export default Esportivos;