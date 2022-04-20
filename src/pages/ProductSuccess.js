import {Helmet} from "react-helmet-async";
import {ModalSuccess} from "./components/ModalSuccess";

export const ProductSuccess = () => {
    const text = {text: 'Produto concluido com sucesso'};
    return (
        <>
            <Helmet>
                <title>DB | Produto </title>
            </Helmet>
            <ModalSuccess {...text}/>
        </>
    )
};