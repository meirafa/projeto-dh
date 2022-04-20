import {Link} from "react-router-dom"
import {Helmet} from "react-helmet-async";
import {ModalText} from "./components/ModalText";

const ReservaConcluida = () => {
    const text = {text: 'Parabéns! Sua reserva foi concluída com sucesso.'};
    return (
        <>
            <Helmet>
                <title>DB | Reserva </title>
            </Helmet>
            <ModalText {...text}/>
        </>
    )
};

export default ReservaConcluida;