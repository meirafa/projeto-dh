import React from "react";
import ListAllProducts from "./ListAllProducts";


function ListProductsFilterCity({cat, cars}) {

    return (
        cars.map((carCity) => {
            if (carCity.city === cat) {
                return carCity.items.map((carItem) => {
                    return <ListAllProducts {...carItem} key={carItem.id}/>
                })
            } else if (cat === null) {
                return carCity.items.map((carItem) => {
                    return <ListAllProducts {...carItem} key={carItem.id}/>
                })
            }
        })

    )
}

export default ListProductsFilterCity;