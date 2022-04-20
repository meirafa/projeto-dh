import {Helmet} from "react-helmet-async";
import {ModalText} from "./components/ModalText";

export const ProdutoConcluido = () => {
    const text = {text: 'Produto concluido com sucesso'};
    return (
        <>
            <Helmet>
                <title>DB | Produto </title>
            </Helmet>
            <ModalText {...text}/>
        </>
    )
};