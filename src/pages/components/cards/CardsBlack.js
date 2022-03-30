import React from 'react'
import {useApis} from '../../../hooks/useApi';
import {Link} from "react-router-dom";

function CardsBlack() {
    const [carsResult, isLoading] = useApis('/jsons/apiCars.json');

    //resultado pode ser nulo ou vazio ate carregar
    const cars = carsResult?.carsList || [];
    //carregando
    if (isLoading) return 'Loading';

    return (
        <>
            {
                cars.map((carItem, key) => {
                    if (key < 8) {
                        return <React.Fragment key={key}>
                            <div className="populars">
                                <div className="populars-imagem">
                                    <img src={carItem.images[0].urlImage} alt={carItem.category.title}/>
                                </div>
                                <div className="populars-informacoes">
                                    <div>
                                        <h3 className="font-h3 cor-0">{carItem.brand} {carItem.model}</h3>
                                        <ul className="font-text-1 cor-1">
                                            <li>
                                                <img src="/img/icones/rastreador.svg" alt="icon local"/>
                                                {carItem.city.name}
                                            </li>
                                            <li>
                                                <img src="/img/icones/carro.png" alt="icon car model"/>
                                                {carItem.category.title}
                                            </li>
                                        </ul>
                                        <p className="font-text-1 cor-1">{carItem.description}</p>
                                    </div>
                                    <Link className="botao" to={`/produtos/${carItem.id}`}>Mais Sobre</Link>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                })
            }
        </>
    )
}

export default CardsBlack;