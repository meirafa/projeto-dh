import React from 'react'
import {useApis} from '../../../hooks/useApi';
import {Link} from "react-router-dom";
import CityFilter from "./../../components/CityFilter";


function ListCategory() {
    const [categoriesResult, isLoading] = useApis('/jsons/apiCars.json');

    //resultado pode ser nulo ou vazio ate carregar
    const categories = categoriesResult?.carsList || [];
    //carregando
    if (isLoading) return 'Loading';

    const categoriesFilter = {};

    return (
        <>
            {
                categories.map((categoriesItem) => {
                    categoriesFilter[categoriesItem.category.title] = categoriesItem.category;
                })}

            {
                Object.values(categoriesFilter).map((categoriesItem, key) => {
                    return <React.Fragment key={key}>
                        <li>
                            <Link to={categoriesItem.link}>
                                <img src={categoriesItem.urlImage} alt={categoriesItem.title}/>
                                <div className="carro-textos">
                                    <h3 className="font-h2">{categoriesItem.title}</h3>
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