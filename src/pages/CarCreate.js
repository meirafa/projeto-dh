import React from "react";
import TitleBgBlack from "./components/titles/TitleBgBlack";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form } from "formik";
import InputSelect from "./components/forms/InputSelect";
import { useUser } from "./context/UserContext";
import InputSelectCategory from "./components/forms/InputSelectCategory";
import { appConfig } from "../appConfig";
import { useApis } from "../hooks/useApi";

const CarCreate = () => {

    const title = { span: "painel de administração", title: "administração de produtos" }

    const [categoryResult, isLoad] = useApis(appConfig.apiUrl + "/categories");
    const category = categoryResult || [];

    const [cityResult, isLoading] = useApis(appConfig.apiUrl + "/cities");
    const city = cityResult || [];


    const { scheduleLocal } = useUser();

    const images = [
        {
            title: '',
            urlImage: ''
        },
        {
            title: '',
            urlImage: ''
        },
        {
            title: '',
            urlImage: ''
        },
        {
            title: '',
            urlImage: ''
        },
        {
            title: '',
            urlImage: ''
        },
    ];


    function onSubmit(values) {
        console.log('SUBMIT', values)
        const token = localStorage.getItem('token')
        console.log(token)
        fetch(appConfig.apiUrl + '/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(values)
        })
            .then(res => {
                if (res.ok) {
                    console.log(values);
                    alert("Produto criado com sucesso!")
                } else {
                    alert("Infelizmente, o produto não pôde ser criado. Por favor, tente novamente mais tarde.")
                }
            })

    }

    return (
        <>
            <Helmet>
                <title>DB | Administração de Produtos </title>
            </Helmet>

            <main>
                <section className="titulo-bg">
                    <div className="container">
                        <TitleBgBlack {...title} />
                    </div>
                </section>

                <div className="container">

                    <Formik
                        onSubmit={onSubmit}
                        initialValues={{
                            brand: '',
                            model: '',
                            cost: '',
                            idCategory: '',
                            idCity: '',
                            description: '',
                            // attribute: '',
                            // images: ''
                        }}
                        render={({ values }) => (
                            <Form className="res-form form">
                                <div>
                                    <label htmlFor="">Marca do Veículo</label>
                                    <Field name="brand" type="text" placeholder="" required />
                                </div>
                                <div>
                                    <label htmlFor="">Modelo do Veículo</label>
                                    <Field name="model" type="text" placeholder="" required />
                                </div>
                                <div>
                                    <label htmlFor="">Custo de Locação</label>
                                    <Field name="cost" type="number" placeholder="" required className="cost-field" />
                                </div>
                                <div>
                                    <label htmlFor="">Categoria</label>
                                    <Field as="select" name="idCategory">
                                        {
                                            category.map((addItem) => {
                                                return <option value={addItem.id} key={addItem.id}>
                                                    {addItem.title}</option>
                                                // return selectValue;
                                            })
                                        }
                                    </Field>
                                </div>
                                <div>
                                    <label htmlFor="">Cidades</label>
                                    <Field as="select" name="idCity">
                                        {
                                            city.map((addItem) => {
                                                return <option value={addItem.id} key={addItem.id}>
                                                    {addItem.name}</option>
                                                // return selectValue;
                                            })
                                        }
                                    </Field>
                                </div>
                                <div>
                                    <label htmlFor="">Descrição</label>
                                    <Field name="description" type="text" required />
                                </div>
                                {/* 
                            <div>
                                <label htmlFor="">Atributos</label>
                                <Field name="attribute" type="text" required />
                            </div> */}
                                <div>
                                    <label htmlFor="">Imagens</label>
                                    {/* <Field name="images" type="text" required /> */}
                                </div>
                                <button className="botao" type="submit">Criar Produto</button>
                            </Form>
                        )}
                    />
                </div>

            </main>
        </>

    )
}

export default CarCreate;