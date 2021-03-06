import React from 'react';
import {Helmet} from "react-helmet-async";
import {ModalSuccess} from "./components/ModalSuccess";

const ReservaConcluida = () => {
    const text = {text: 'Parabéns! Sua reserva foi concluída com sucesso.'};
    return (
        <>
            <Helmet>
                <title>DB | Reserva </title>
            </Helmet>
            <ModalSuccess {...text}/>
        </>
    )
};

export default ReservaConcluida;