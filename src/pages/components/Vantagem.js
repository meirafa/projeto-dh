import TitleBgBlack from "./titles/TitleBgBlack";

function Vantagem() {
    const title = {span: "A melhor experiencia de luxo em aluguel de carros", title: "vantagens"}
    return (
        <section className="bg-black">
            <div className="container">
                <TitleBgBlack {...title}/>

                <div className="vantagens">
                    <ul>
                        <li>
                            <img src="/img/icones/dogs.png" alt="" style={{width: "32px"}}/>
                            <h3 className="font-1-l cor-0">Pet Friendly</h3>
                            <p className="font-text-1 cor-1">Sabemos que seu melhor amigo não pode ficar de fora, por
                                isso
                                garantimos a segurança de seu pet.</p>
                        </li>
                        <li>
                            <img src="/img/icones/support.png" alt="" style={{width: "32px"}}/>
                            <h3 className="font-1-l cor-0">Prático</h3>
                            <p className="font-text-1 cor-1">Nosso atendimento é 24h. Você assina e recebe o carro sem
                                se
                                preocupar com burocracias, a qualquer hora que desejar.</p>
                        </li>
                        <li>
                            <img src="/img/icones/sustentavel.svg" alt=""/>
                            <h3 className="font-1-l cor-0">Sustentável</h3>
                            <p className="font-text-1 cor-1">Trabalhamos com carros hibridos e automaticos, para tornar
                                sua
                                experiencia mais pratica.</p>
                        </li>
                        <li>
                            <img src="/img/icones/combustivel.png" alt="" style={{width: "32px"}}/>
                            <h3 className="font-1-l cor-0">Abastecimento</h3>
                            <p className="font-text-1 cor-1">Use nosso aplicativo para localizar nossos postos parceiros
                                e
                                ganhe desconto e vantagens.</p>
                        </li>
                        <li>
                            <img src="/img/icones/seguro.svg" alt=""/>
                            <h3 className="font-1-l cor-0">Segurança</h3>
                            <p className="font-text-1 cor-1">Com o seguro você pode viajar tranquilo, pois temos ampla
                                rede
                                de oficinas prontos para resolver qualquer emergencia.</p>
                        </li>
                        <li>
                            <img src="/img/icones/velocidade.svg" alt=""/>
                            <h3 className="font-1-l cor-0">Rapidez</h3>
                            <p className="font-text-1 cor-1">Todos nossos veiculos possuem tag de pedagios para que você
                                economize tempo, e usuflua melhor de sua viagem.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Vantagem;