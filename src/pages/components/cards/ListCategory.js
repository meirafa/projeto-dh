import React from 'react'
import {useApis} from '../../../hooks/useApi';
import {Link} from "react-router-dom";

function ListCategory() {
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
                        <li>
                            <Link to={categoriesItem.link}>
                                <img src={categoriesItem.img} alt={categoriesItem.category}/>
                                <div className="carro-textos">
                                    <h3 className="font-h2">{categoriesItem.category}</h3>
                                </div>
                            </Link>
                        </li>
                    </React.Fragment>
                })
            }
        </>
    )
}

export default ListCategory;