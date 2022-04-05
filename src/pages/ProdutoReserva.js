import { Formik, Field, Form } from "formik";
import { Helmet } from "react-helmet-async";
import TitleBgBlack from "./components/titles/TitleBgBlack";
import TitleBgWhite from "./components/titles/TitleBgWhite";
import InputDate from "./components/forms/InputDate";
import { useWidth } from "../hooks/useWidth";
import DatePicker from 'antd/lib/date-picker';
import TimePicker from 'antd/lib/time-picker';
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";
import React from "react";
import { useUser } from "./context/UserContext";
import { useParams } from "react-router-dom";
import { useSpecificCarId } from "../hooks/useSpecificCarId";




const ProdutoReserva = () => {

    const title = { span: "informações da sua reserva", title: "confirmação" }
    const tituloPolitica = { span: "condições de aluguel", title: "política" }

    const userState = useUser();
    
    const width = useWidth();
    const { id } = useParams();
    const { car, isLoading } = useSpecificCarId(id);

    if (!car && !isLoading) return <PageNotFound />;


    function onSubmit(values, actions) {
        console.log('SUBMIT', values)
    }

    const dataRetirada = localStorage.getItem("dataRetirada")
    const dataDevolucao = localStorage.getItem("dataDevolucao")
    




    const placeholder = ["Retirada", "Devolução"];

    return (
        <>
            <Helmet>
                <title>DB | Reserva </title>
            </Helmet>
            <main>
                <section className="titulo-bg">
                    <div className="container">
                        <TitleBgBlack {...title} />
                    </div>
                </section>
                <div className="res-content">


                    <div className="res-content-1">
                        <div className="res-card" >
                            <h2>Complete seus dados</h2>
                            <Formik
                                onSubmit={onSubmit}
                                initialValues={{
                                    name: '',
                                    surname: '',
                                    email: '',
                                    city: ''
                                }}
                                render={({ values }) => (
                                    <Form className="res-form form">
                                        <div>
                                            <label htmlFor="">Nome</label>
                                            <Field name="name" type="text" placeholder={userState.user?.name} disabled />
                                        </div>
                                        <div>
                                            <label htmlFor="">Sobrenome</label>
                                            <Field name="surname" type="text" placeholder={userState.user?.lastName} disabled />
                                        </div>
                                        <div>
                                            <label htmlFor="">E-mail</label>
                                            <Field name="email" type="email" placeholder={userState.user?.email} disabled />
                                        </div>
                                        <div>
                                            <label htmlFor="">Cidade</label>
                                            <Field name="city" type="text" required />
                                        </div>
                                        {/* <button type="submit">Conferir</button> */}
                                    </Form>
                                )}
                            />
                        </div>
                        <div className="res-card">
                            <h2>Selecione sua data de reserva</h2>
                            {/* InputDate usado para fins de visualização apenas */}
                            <InputDate />
                        </div>
                        <div className="res-card">
                            <h2>O horário que deseja retirar o veículo</h2>
                            <p>Seu carro estará estará esperando por você</p>
                            <TimePicker size="large" onChange={value => console.log(value)} />
                        </div>
                    </div>

                    <div className="res-card details">
                        <div className="res-details">
                            <div className="info-1">

                                <h2>Detalhes da reserva</h2>
                                <img src={car?.images[0].urlImage} width="100%" alt="" />
                            </div>
                            <div className="info-2">
                                <p className="font-h3">{car?.category.title}</p>
                                <h2 className="font-h1">{car?.brand} {car?.model}</h2>
                                <div className="info-local">
                                    <img width="25px" src="/img/icones/rastreador.svg" alt="icon local" />
                                    <p>{car?.city.address}, {car?.city.name}</p>
                                </div>

                                <div className="res-check">
                                    <h3>Retirada</h3>
                                    <h3>{dataRetirada}</h3>
                                </div>
                                <div className="res-check check2">
                                    <h3>Devolução</h3>
                                    <h3>{dataDevolucao}</h3>
                                </div>
                                <button type="submit" className="botao">Confirmar Reserva</button>
                            </div>
                        </div>

                    </div>
                </div>

                <article className="bg-black">
                    <div className="container" >
                        <TitleBgBlack {...tituloPolitica} />

                        <Row>
                            <Col xs={20} md={12} lg={8}>
                                <h3 className="font-h3 cor-1">Normas</h3>
                                <p className="text-1">Garantimos o modelo proposto. Somente a
                                    cor ou a potência do motor
                                    podem variar, mas
                                    enviaremos todas as especificações para confirmar o pedido.
                                    O preço o aluguel inclui
                                    milhas de 150 km por dia.</p>
                            </Col>
                            <Col xs={20} md={12} lg={8}>
                                <h3 className="font-h3 cor-1">Segurança</h3>
                                <p className="text-1">O carro pode ser entregue a seu pedido em
                                    qualquer lugar do
                                    Brasil. O custo da
                                    entrega
                                    depende da distância.</p>
                            </Col>
                            <Col xs={20} md={12} lg={8}>
                                <h3 className="font-h3 cor-1">Cancelamento</h3>
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

            </main>


        </>
    )

}


export default ProdutoReserva;