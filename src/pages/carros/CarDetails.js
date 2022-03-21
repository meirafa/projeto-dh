import {Link, useParams} from 'react-router-dom';
import {Helmet} from "react-helmet-async";
import ListCategory from "../components/cards/ListCategory";
import TitleBgBlack from "../components/titles/TitleBgBlack";
import Vantagem from "../components/Vantagem";
import 'antd/dist/antd.css';
import {Image} from 'antd';
import React from "react";
import {useSpecificCar} from "../../hooks/useSpecificCar";
import InputReservation from '../components/forms/InputReservation'; 
import Reservation from '../components/Reservation';

function CarDetails() {

    const [visible, setVisible] = React.useState(false);
    const {id} = useParams();


    const {car, isLoading} = useSpecificCar(id);

    if (!car && !isLoading) return '404';

    return (
        <>
            <Helmet>
                <title>DB | Categoria {/* > */}  &gt; Carro</title>
            </Helmet>

            <main>
                <section className="bg-black">
                    <div className="bg-image">
                        <div className="container">
                            <div className="titulo">
                                <p className="font-h3 cor-1">{car?.categoria}</p>
                                <h1 className="font-h1 cor-0">{car?.marca} {car?.modelo}<span className="cor-l1">.</span>
                                </h1>
                            </div>

                            <div className="carro">
                                <div className="carro-imagens">
                                    <Image
                                        preview={{visible: false}}
                                        onClick={() => setVisible(true)}
                                        src={car?.imagem}
                                    />

                                    <div style={{display: 'flex'}}>
                                        <Image.PreviewGroup
                                            preview={{visible, onVisibleChange: vis => setVisible(vis)}}>
                                            <Image src={car?.imagem} style={{display: 'none'}}/>
                                            <Image src="../img/carros/conversivel-1.jpg"/>
                                            <Image src="../img/carros/conversivel-3.jpg"/>
                                            <Image src="../img/carros/conversivel-1.jpg"/>
                                            <Image src="../img/carros/conversivel-3.jpg"/>
                                        </Image.PreviewGroup>
                                    </div>

                                </div>
                                <div className="carro-conteudo">
                                    <p className="font-h3 cor-1">{car?.descricao}</p>
                                    <div className="carro-comprar">
                                        <Link className="botao" to="/reserva">Alugar Agora</Link>
                                    </div>

                                    <h2 className="font-text-2 cor-0">Características</h2>
                                    <ul className="carro-ficha font-text-1 cor-4">
                                        <li><p className="font-text-1 cor-1">Aceleração</p>
                                            <span>{car?.aceleracao}</span></li>
                                        <li><p className="font-text-1 cor-1">Câmbio</p> <span>{car?.cambio}</span></li>
                                        <li><p className="font-text-1 cor-1">Combustível</p>
                                            <span>{car?.combustivel}</span></li>
                                        <li><p className="font-text-1 cor-1">Lugares</p>  <span>{car?.lugares}</span>
                                        </li>
                                        <li><p className="font-text-1 cor-1">Portas</p>  <span>{car?.portas}</span></li>
                                        <li><p className="font-text-1 cor-1">Potência</p>  <span>{car?.potencia}</span>
                                        </li>
                                        <li><p className="font-text-1 cor-1">Tração</p>  <span>{car?.tracao}</span></li>
                                    </ul>

                                    {/*<h2 className="font-text-2 cor-0">Informações</h2>*/}
                                    {/*<ul className="carro-informacoes">*/}
                                    {/*    <li>*/}
                                    {/*        <img src="../img/icones/motor.png" alt=""/>*/}
                                    {/*        <h3 className="font-h4 cor-0">Aceleração</h3>*/}
                                    {/*        <p className="font-text-1 cor-1">Permite você viajar distâncias*/}
                                    {/*            inimaginaveis*/}
                                    {/*            com a*/}
                                    {/*            sua*/}
                                    {/*            bike.</p>*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*        <img src="../img/icones/velocidade.svg" alt=""/>*/}
                                    {/*        <h3 className="font-h4 cor-0">40 km/h</h3>*/}
                                    {/*        <p className="font-text-1 cor-1">A mais rápida carro elétrica disponível*/}
                                    {/*            hoje no*/}
                                    {/*            mercado.</p>*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*        <img src="../img/icones/rastreador.svg" alt=""/>*/}
                                    {/*        <h3 className="font-h4 cor-0">Rastreador</h3>*/}
                                    {/*        <p className="font-text-1 cor-1">Rastreador e sistema anti-furto para*/}
                                    {/*            garantir o*/}
                                    {/*            seu*/}
                                    {/*            sossego.</p>*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*        <img src="../img/icones/carbono.svg" alt=""/>*/}
                                    {/*        <h3 className="font-h4 cor-0">Fibra de Carbono</h3>*/}
                                    {/*        <p className="font-text-1 cor-1">Maior proteção possível para a sua*/}
                                    {/*            digitalbooking*/}
                                    {/*            com*/}
                                    {/*            fibra*/}
                                    {/*            de*/}
                                    {/*            carbono.</p>*/}
                                    {/*    </li>*/}
                                    {/*</ul>*/}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bloco de Reserva aqui */}

                <Reservation/>

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

export default CarDetails;