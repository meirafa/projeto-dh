import React from "react";
import ListAllProducts from "./ListAllProducts";


function ListProductsFilterCity({address}) {

    return (
        address.map((carCity) => {
            return <ListAllProducts {...carCity} key={carCity.id}/>
        })
    )
}

export default ListProductsFilterCity;