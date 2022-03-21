import React from 'react';
import {Helmet} from "react-helmet-async";
import TitleBgBlack from "./components/titles/TitleBgBlack";
import Input from "./components/forms/Input";
//import useLocalStorage from "./../hooks/useLocalStorage";
import useForm from "./../hooks/useForm";
import {NavLink, useNavigate} from "react-router-dom";

const Login = () => {

    const title = {span: "sua experiência começa aqui!", title: "acesse sua área exclusiva"}

    //localStorage:
    //const [userLogin, setUserLogin] = useLocalStorage('nome', '');

    //form:
    const email = useForm('email');
    const password = useForm('password');

    //usuario registrado
    const user = "laurasouza@digitalbooking.com";
    const pass = "laurasouza123";
    const valueEmail = email.value;
    const valuePass = password.value;

    //validação
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        if (email.validate() && password.validate()) {
            redirectHome();
        } else {
            alert("Corrija seus dados")
        }
    };

    function redirectHome() {
        if (user === valueEmail && pass === valuePass) {
            return navigate("/home-user")
        } else {
            alert("Por favor, tente novamente, suas credenciais são inválidas")
        }
    }

    return (
        <>
            <Helmet>
                <title>DB | Login </title>
            </Helmet>
            <main>
                <section className="titulo-bg">
                    <div className="container">
                        <TitleBgBlack {...title}/>
                        <form className="login" onSubmit={handleSubmit}>
                            <div className="login-produto">

                                <div className="login-conteudo" id="login-entrar">
                                    <div className="login-dados form">
                                        <h2 className="font-text-2 cor-2 col-2">Conecte-se</h2>
                                        <div>
                                            <Input label="Email" type="email" id="email"
                                                   placeholder="exemplo@.com" {...email}/>
                                        </div>
                                        <div>
                                            <Input label="Password" type="password" id="password"
                                                   {...password}/>
                                        </div>
                                        <button className="botao" type="submit">Iniciar Sessão</button>
                                        <NavLink to="/cadastro" className="col-2">Cadastro</NavLink>
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

export default Login;