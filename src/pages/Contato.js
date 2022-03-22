import {Helmet} from "react-helmet-async";
import TitleBgWhite from "./components/titles/TitleBgWhite";
import TitleBgBlack from "./components/titles/TitleBgBlack";

function Contato() {
    const title = {span: "Respostas em até 24h", title: "entre em contato"}
    return (
        <>
            <Helmet>
                <title>DB | Contato</title>
            </Helmet>
            <main>
                <section className="titulo-bg">
                    <div className="container">
                        <TitleBgBlack {...title}/>

                        <div className="contato">
                            <div className="contato-dados" aria-label="Endereço">
                                <h2 className="font-h4 cor-0">Loja Online</h2>
                                <div className="contato-endereco font-text-1 cor-0">
                                    <p>Rua Ali Perto, 35</p>
                                    <p>Rio de Janeiro - RJ</p>
                                    <p>Brasil - Terra - Vita Láctea</p>
                                </div>
                                <address className="contato-meios font-text-1 cor-0">
                                    <a href="mailto:contato@digitalbooking.com">contato@digitalbooking.com</a>
                                    <a href="mailto:assistencia@digitalbooking.com">assistencia@digitalbooking.com</a>
                                    <a href="tel:+552199999999">+55 21 9999-9999</a>
                                </address>
                            </div>
                            <div className="contato-formulario" aria-label="Formulário">
                                <form className="form" action="/contato">
                                    <div>
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" name="nome" placeholder="Seu nome"/>
                                    </div>
                                    <div>
                                        <label htmlFor="telefone">Telefone</label>
                                        <input type="text" id="telefone" name="telefone" placeholder="(21) 9999-9999"/>
                                    </div>
                                    <div className="col-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="contato@email.com"/>
                                    </div>
                                    <div className="col-2">
                                        <label htmlFor="mensagem">Mensagem</label>
                                        <textarea rows="5" id="mensagem" name="mensagem"
                                                  placeholder="O que você precisa?"/>
                                    </div>
                                    <button className="botao col-2">Enviar Mensagem</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Contato;