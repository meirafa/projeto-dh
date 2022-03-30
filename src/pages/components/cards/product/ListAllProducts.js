import React from 'react'
import {Link} from "react-router-dom";

function ListAllProducts(props) {
    return (
        <>
            <div className="frota">
                <div className="frota-imagem">
                    {
                        props.images.map((items) => {
                            if (items.title === 'principal') return <img src={items.urlImage} alt={items.title}/>
                        })
                    }
                </div>
                <div className="frota-informacoes">
                    <div>
                        <h3 className="font-h3 cor-0">{props.brand} {props.model}</h3>
                        <ul className="font-text-1 cor-1">
                            <li>
                                <img src="/img/icones/rastreador.svg"
                                     alt="icon local"/>
                                {props.city.name}
                            </li>
                            <li>
                                <img src="/img/icones/carro.png"
                                     alt="icon car model"/>
                                {props.category.title}
                            </li>
                        </ul>
                        <p className="font-text-1 cor-1">{props.description}</p>
                    </div>
                    <Link className="botao" to={`/produtos/${props.id}`}>Mais
                        Sobre</Link>
                </div>
            </div>
        </>
    )
};


export default ListAllProducts;