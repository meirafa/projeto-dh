import React from 'react'
import {useApis} from '../../../hooks/useApi';
import {Link} from "react-router-dom";

function CardsAnimation() {
    const [carsResult, isLoading] = useApis('/jsons/popular.json');

    //resultado pode ser nulo ou vazio ate carregar
    const cars = carsResult?.carsList || [];
    //carregando
    if (isLoading) return 'Loading';


    return (
        <>
            {
                cars.map((carItem, key) => {
                    return <React.Fragment key={key}>
                        <div className="populars">
                            <div className="populars-imagem">
                                <img src={carItem.img} alt={carItem.category}/>
                            </div>
                            <div className="populars-informacoes">
                                <h3 className="font-h3 cor-0">{carItem.title}</h3>
                                <ul className="font-text-1 cor-1">
                                    <li>
                                        <img src="/img/icones/local.svg" alt="icon local"/>
                                        {carItem.localization}
                                    </li>
                                    <li>
                                        <img src="/img/icones/carro.png" alt="icon car model"/>
                                        {carItem.category}
                                    </li>
                                </ul>

                                <p className="font-text-1 card_overlay">{carItem.description}</p>

                                <div className="card_header">
                                    <Link className="botao" to="/">Mais Sobre</Link>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                })
            }
        </>
    )
}

export default CardsAnimation;