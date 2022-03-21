import React from 'react'
import {Link} from "react-router-dom";

function ListAllProducts(props) {
    const {categoria, marca, modelo, imagem, descricao, link, localizacao} = props;

    return (
        <>
            <div className="frota">
                <div className="frota-imagem">
                    <img src={imagem} alt={categoria}/>
                </div>
                <div className="frota-informacoes">
                    <div>
                        <h3 className="font-h3 cor-0">{marca} {modelo}</h3>
                        <ul className="font-text-1 cor-1">
                            <li>
                                <img src="/img/icones/rastreador.svg"
                                     alt="icon local"/>
                                {localizacao}
                            </li>
                            <li>
                                <img src="/img/icones/carro.png"
                                     alt="icon car model"/>
                                {categoria}
                            </li>
                        </ul>
                        <p className="font-text-1 cor-1">{descricao}</p>
                    </div>
                    <Link className="botao" to={link}>Mais
                        Sobre</Link>
                </div>
            </div>
        </>
    )
};


export default ListAllProducts;