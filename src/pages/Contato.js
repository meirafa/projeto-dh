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
                                        <label for="nome">Nome</label>
                                        <input type="text" id="nome" name="nome" placeholder="Seu nome"/>
                                    </div>
                                    <div>
                                        <label for="telefone">Telefone</label>
                                        <input type="text" id="telefone" name="telefone" placeholder="(21) 9999-9999"/>
                                    </div>
                                    <div className="col-2">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="contato@email.com"/>
                                    </div>
                                    <div className="col-2">
                                        <label for="mensagem">Mensagem</label>
                                        <textarea rows="5" id="mensagem" name="mensagem"
                                                  placeholder="O que você precisa?"></textarea>
                                    </div>
                                    <button className="botao col-2">Enviar Mensagem</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="container">
                    <div className="lojas">
                        <h2 className="font-h1">lojas locais<span className="cor-l1">.</span></h2>
                        <div className="lojas-item">
                            <img src="/img/lojas/rj.jpg"
                                 alt="mapa marcando o endereço em Rua Ali Perto, 25 - Rio de Janeiro - RJ"/>
                            <div className="lojas-conteudo">
                                <h3 className="font-h2">Rio de Janeiro</h3>
                                <div className="lojas-dados font-text-1 cor-3">
                                    <p>Rua Ali Perto, 25</p>
                                    <p>Rio de Janeiro - RJ</p>
                                </div>
                                <div className="lojas-dados font-text-1 cor-3">
                                    <a href="mailto:rj@digitalbooking.com">rj@digitalbooking.com</a>
                                    <a href="tel:+552199999999">+55 21 9999-9999</a>
                                </div>
                                <p className="lojas-tempo font-text-1"><img src="/img/icones/horario.svg" alt=""/>08-18h
                                    de
                                    seg à dom</p>
                            </div>
                        </div>

                        <div className="lojas-item">
                            <img src="/img/lojas/sp.jpg"
                                 alt="mapa marcando o endereço em Rua Ali Perto, 25 - São Paulo - SP"/>
                            <div className="lojas-conteudo">
                                <h3 className="font-h2">São Paulo</h3>
                                <div className="lojas-dados font-text-1 cor-3">
                                    <p>Rua Ali Perto, 25</p>
                                    <p>São Paulo - SP</p>
                                </div>
                                <div className="lojas-dados font-text-1 cor-3">
                                    <a href="mailto:sp@digitalbooking.com">sp@digitalbooking.com</a>
                                    <a href="tel:+551199999999">+55 11 9999-9999</a>
                                </div>
                                <p className="lojas-tempo font-text-1"><img src="/img/icones/horario.svg" alt=""/>08-18h
                                    de
                                    seg à dom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contato;