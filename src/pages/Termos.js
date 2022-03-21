import {Helmet} from "react-helmet-async";
import TitleBgBlack from "./components/titles/TitleBgBlack";

function Termos() {
    const title = {span: "Termos de uso", title: "termos e condições"}
    return (
        <>
            <Helmet>
                <title>DB | Termos de uso</title>
            </Helmet>
            <main>
                <section>
                    <div className="container">
                        <TitleBgBlack {...title}/>

                        <div className="termos font-text-1 cor-2">
                            <h2 className="font-1-l cor-3">1. Política de Estorno</h2>
                            <p>1.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à
                                vista
                                também
                                aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito.
                                Para
                                pagamentos à vista também aceitamos PIX e Boleto.</p>
                            <p>1.2 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à
                                vista
                                também
                                aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito.
                                Para
                                pagamentos à vista também aceitamos PIX e Boleto.</p>
                            <p>1.3 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à
                                vista
                                também
                                aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito.
                                Para
                                pagamentos à vista também aceitamos PIX e Boleto.</p>
                            <h2 className="font-1-l cor-3">2. Conta do Usuário</h2>
                            <p>2.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à
                                vista
                                também
                                aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito.
                                Para
                                pagamentos à vista também aceitamos PIX e Boleto.</p>
                            <h2 className="font-1-l cor-3">3. Pagamentos</h2>
                            <p>3.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à
                                vista
                                também
                                aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito.
                                Para
                                pagamentos à vista também aceitamos PIX e Boleto.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Termos;