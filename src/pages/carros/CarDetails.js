import {Link, useParams} from 'react-router-dom';
import {Helmet} from "react-helmet-async";
import ListCategory from "../components/cards/ListCategory";
import Vantagem from "../components/Vantagem";
import 'antd/dist/antd.css';
import Image from 'antd/lib/image';
import React from "react";
import {useSpecificCarId} from "../../hooks/useSpecificCarId";
import Reservation from '../components/Reservation';
import RateStars from "../components/RateStars";
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";
import TitleBgWhite from "../components/titles/TitleBgWhite";
import PageNotFound from "../PageNotFound";

function CarDetails() {
    const tituloPolitica = {span: "condições de aluguel", title: "política"}

    const [visible, setVisible] = React.useState(false);
    const {id} = useParams();
    const {car, isLoading} = useSpecificCarId(id);

    if (!car && !isLoading) return <PageNotFound/>;

    return (
        <>
            <Helmet>
                <title>DB | Luxury Cars</title>
            </Helmet>

            <main>
                <section className="bg-black">
                    <div className="bg-image">
                        <div className="container">
                            <div className="titulo title-details">
                                <div>
                                    <p className="font-h3 cor-1">{car?.category.title}</p>
                                    <h1 className="font-h1 cor-0">{car?.brand} {car?.model}<span
                                        className="cor-l1">.</span>
                                    </h1>
                                </div>
                                <div className="title-seta">
                                    <Link to="/">
                                        <svg height="2.8em" width="2.8em" viewBox="0 0 2 1" preserveAspectRatio="none">
                                            <polyline
                                                fill="none"
                                                stroke="#f0572d"
                                                strokeWidth="0.1"
                                                points="0.9,0.1 0.1,0.5 0.9,0.9"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="carro">
                                <div className="carro-imagens">
                                    <Image
                                        preview={{visible: false}}
                                        onClick={() => setVisible(true)}
                                        src={car?.images[0].urlImage}
                                    />

                                    <div style={{display: 'flex'}}>
                                        <Image.PreviewGroup
                                            preview={{visible, onVisibleChange: vis => setVisible(vis)}}>
                                            {car?.images.map((img, key) => {
                                                return (
                                                    <React.Fragment key={key}>
                                                        {(img.title === 'principal') ?
                                                            <Image src={img.urlImage} style={{display: 'none'}}/>
                                                            :
                                                            <Image src={img.urlImage}/>
                                                        }
                                                    </React.Fragment>
                                                )
                                            })}
                                        </Image.PreviewGroup>
                                    </div>
                                </div>

                                <div className="carro-conteudo">
                                    <p className="font-h3 cor-1">{car?.description}</p>

                                    <RateStars/>

                                    <div className="carro-comprar">
                                        <Link className="botao" to="reserva">Alugar Agora</Link>
                                    </div>

                                    <h2 className="font-text-2 cor-0">Características</h2>
                                    <ul className="carro-ficha font-text-1 cor-4">
                                        <li><p className="font-text-1 cor-1">Aceleração</p>
                                            <span>{car?.attribute.acceleration}</span></li>
                                        <li><p className="font-text-1 cor-1">Câmbio</p>
                                            <span>{car?.attribute.transmission}</span></li>
                                        <li><p className="font-text-1 cor-1">Combustível</p>
                                            <span>{car?.attribute.gas}</span></li>
                                        <li><p className="font-text-1 cor-1">Lugares</p>
                                            <span>{car?.attribute.seats}</span>
                                        </li>
                                        <li><p className="font-text-1 cor-1">Portas</p>
                                            <span>{car?.attribute.doors}</span></li>
                                        <li><p className="font-text-1 cor-1">Potência</p>
                                            <span>{car?.attribute.power}</span>
                                        </li>
                                        <li><p className="font-text-1 cor-1">Tração</p>
                                            <span>{car?.attribute.tcs}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <article className="container">
                    <div className="lojas">
                        <h2 className="font-h1">lojas locais<span
                            className="cor-l1">.</span></h2>
                        <div className="lojas-item">
                            {/*<img src={car?.city.mapa}*/}
                            {/*     alt="mapa"/>*/}
                            <div className="lojas-conteudo">
                                <h3 className="font-h2">{car?.city.name}</h3>
                                <div className="lojas-dados font-text-1 cor-3">
                                    <p>{car?.city.address}</p>
                                </div>
                                {/*<div className="lojas-dados font-text-1 cor-3">*/}
                                {/*    <a href="mailto:sp@digitalbooking.com">sp@digitalbooking.com</a>*/}
                                {/*    <a href="tel:+551199999999">+55 11 9999-9999</a>*/}
                                {/*</div>*/}
                                <p className="lojas-tempo font-text-1"><img
                                    src="/img/icones/horario.svg" alt=""/>08-18h
                                    de
                                    seg à dom</p>
                            </div>
                        </div>
                    </div>
                </article>
                {/* Bloco de Reserva aqui */
                }

                <Reservation/>
                <article>
                    <div className="container">
                        <TitleBgWhite {...tituloPolitica}/>

                        <Row>
                            <Col xs={20} md={12} lg={8}>
                                <h3 className="font-h3">Normas</h3>
                                <p className="text-1">Garantimos o modelo proposto. Somente a
                                    cor ou a potência do motor
                                    podem variar, mas
                                    enviaremos todas as especificações para confirmar o pedido.
                                    O preço o aluguel inclui
                                    milhas de 150 km por dia.</p>
                            </Col>
                            <Col xs={20} md={12} lg={8}>
                                <h3 className="font-h3">Segurança</h3>
                                <p className="text-1">O carro pode ser entregue a seu pedido em
                                    qualquer lugar do
                                    Brasil. O custo da
                                    entrega
                                    depende da distância.</p>
                            </Col>
                            <Col xs={20} md={12} lg={8}>
                                <h3 className="font-h3">Cancelamento</h3>
                                <p className="text-1">30 dias ou mais antes do dia do início do
                                    aluguel - multa de 20%
                                    do valor total
                                    14 dias ou menos antes do início do aluguel - multa de 40%
                                    do valor total
                                    7 dias antes do início do aluguel - multa de 60% do valor
                                    total
                                    3 dias antes ou menos do início do aluguel - multa de 100%
                                    do valor total
                                    Se você não comparecer na hora e data combinadas e/ou
                                    fornecer toda a documentação
                                    necessária e/ou fornecer um cartão de crédito em nome do
                                    motorista principal com
                                    fundos
                                    suficientes disponíveis para o depósito do carro, 100 %
                                    multa do valor total.</p>
                            </Col>
                        </Row>
                    </div>
                </article>

                <Vantagem/>

                <article className="carros-lista">
                    <div className="container">
                        <h2 className="font-h1">escolha outras categorias<span
                            className="cor-l1">.</span></h2>

                        <ul>
                            <ListCategory/>
                        </ul>
                    </div>
                </article>
            </main>
        </>
    )
}

export default CarDetails;