import React from 'react';
import {Helmet} from "react-helmet-async";
import TitleBgBlack from "./components/titles/TitleBgBlack";
import Input from "./components/forms/Input";
import useForm from "./../hooks/useForm";
import {NavLink, useNavigate} from "react-router-dom";
import {appConfig} from "../appConfig";
import {loginToken} from "./Login";
import {useUser} from "./context/UserContext";

function saveUser(formData) {
    localStorage.setItem('user', JSON.stringify(formData));
    //salvando usuario na api
    console.log(formData);
    return fetch(appConfig.apiUrl + '/users', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json;"
        }
    }).then((res) => {
        //enviar informações para cadastro do token que é criado no login
        if (res.ok) {
            return loginToken(formData)
        }

        if (res.status === 422) {
            throw new Error('Já tem registro com este usuario')
        }

        throw new Error("Infelizmente, você não pôde se registrar. Por favor, tente novamente mais tarde.")
    })
}

function Cadastro() {

    const userState = useUser();
    const navigate = useNavigate();

    const title = {span: "sua experiência começa aqui!", title: "acesse sua área exclusiva"};

    //form:
    const emailCad = useForm('email');
    const passwordCad = useForm('password');
    const isEmail = useForm('email');
    const nome = useForm();
    const sobrenome = useForm(false);

    //validação
    function handleSubmit(event) {
        event.preventDefault();

        if (emailCad.validate() && passwordCad.validate() && nome.validate()) {
            const userData = {
                email: emailCad.value,
                password: passwordCad.value,
                name: nome.value,

                lastName: sobrenome.value
            };

            saveUser(userData).then(() => {
                // userState.loadUser();
                userState.setUser(userData);
                navigate('/')
            }).catch((err) => {
                alert(err.message)
            });

        }
    }

    return (
        <>
            <Helmet>
                <title>DB | Cadastro</title>
            </Helmet>
            <main>
                <section className="titulo-bg">

                    <div className="container">
                        <TitleBgBlack {...title}/>

                        <form className="cadastro" onSubmit={handleSubmit}>
                            <div className="cadastro-produto">
                                <div className="cadastro-conteudo" id="cadastro-cadastro">
                                    <div className="cadastro-dados form">
                                        <h2 className="font-text-2 cor-2 col-2">Cadastre-se</h2>
                                        <div>
                                            <Input label="Nome" type="text" id="nome"
                                                   {...nome}/>
                                        </div>
                                        <div>
                                            <Input label="Sobrenome" type="text" id="sobrenome"
                                                   {...sobrenome}/>
                                        </div>
                                        <div>
                                            <Input label="Email" type="email" id="emailCad"
                                                   placeholder="exemplo@.com" {...emailCad}/>
                                        </div>
                                        <div>
                                            <Input label="Repetir Email" type="email" id="isEmail"
                                                   placeholder="exemplo@.com" {...isEmail}/>
                                        </div>
                                        <div className="col-2">
                                            <Input label="Password" type="password" id="passwordCad"
                                                   {...passwordCad}/>
                                        </div>
                                        <button className="botao">Registrar</button>
                                        <NavLink to="/login" className="col-2">Login</NavLink>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Cadastro;