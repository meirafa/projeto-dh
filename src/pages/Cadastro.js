import React from 'react';
import {Helmet} from "react-helmet-async";
import TitleBgBlack from "./components/titles/TitleBgBlack";
import Input from "./components/forms/Input";
//import useLocalStorage from "./../hooks/useLocalStorage";
import useForm from "./../hooks/useForm";
import {NavLink} from "react-router-dom";

function Cadastro() {

    const title = {span: "sua experiência começa aqui!", title: "acesse sua área exclusiva"}

    //localStorage:
    //const [usercadastro, setUsercadastro] = useLocalStorage('nome', '');

    //form:
    const emailCad = useForm('email');
    const passwordCad = useForm('password');
    const isEmail = useForm('email');
    const nome = useForm();
    const sobrenome = useForm(false);

    //validação
    function handleSubmit(event) {
        event.preventDefault();

        if (email.validate() && password.validate() && nome.validate()) {
            console.log("Enviar")
        } else {
            console.log("Não enviar")
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