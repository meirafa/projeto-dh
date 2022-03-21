import React from 'react'
import {useApis} from '../../../hooks/useApi';
import {Link} from "react-router-dom";

function ListCategories() {
    const [categoriesResult, isLoading] = useApis('/jsons/categoria.json');

    //resultado pode ser nulo ou vazio ate carregar
    const categories = categoriesResult?.categories || [];
    //carregando
    if (isLoading) return 'Loading';

    return (
        <>
            {
                categories.map((categoriesItem, key) => {
                    return <React.Fragment key={key}>

                        {key % 2 == 0 ?
                            <div className="carros-white">
                                <div className="carros">
                                    <div className="carros-imagem">
                                        <img src={categoriesItem.img} alt={categoriesItem.category}/>
                                        <span className="font-h4 cor-0">{categoriesItem.value}</span>
                                    </div>
                                    <div className="carros-conteudo">
                                        <h2 className="font-h2">{categoriesItem.category}</h2>
                                        <p className="font-text-1 cor-3">{categoriesItem.description}</p>
                                        <ul className="font-h4 cor-3">
                                            <li>
                                                <img src="/img/icones/velocidade.svg" alt=""/>
                                                50 km/h
                                            </li>
                                            <li>
                                                <img src="/img/icones/rastreador.svg" alt="Localização"/>
                                                {categoriesItem.localization}
                                            </li>
                                        </ul>
                                        <Link className="botao" to={categoriesItem.link}>Mais Sobre</Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="carros-bg">
                                <div className="carros">
                                    <div className="carros-imagem">
                                        <img src={categoriesItem.img} alt={categoriesItem.category}/>
                                        <span className="font-h4 cor-0">{categoriesItem.value}</span>
                                    </div>
                                    <div className="carros-conteudo">
                                        <h2 className="font-h2 cor-0">{categoriesItem.category}</h2>
                                        <p className="font-text-1 cor-1">{categoriesItem.description}</p>
                                        <ul className="font-h4 cor-1">
                                            <li>
                                                <img src="/img/icones/velocidade.svg" alt=""/>
                                                45 km/h
                                            </li>
                                            <li>
                                                <img src="/img/icones/rastreador.svg" alt="Localização"/>
                                                {categoriesItem.localization}
                                            </li>
                                        </ul>
                                        <Link className="botao" to={categoriesItem.link}>Mais Sobre</Link>
                                    </div>
                                </div>
                            </div>
                        }

                    </React.Fragment>
                })
            }
        </>
    )
}

export default ListCategories;