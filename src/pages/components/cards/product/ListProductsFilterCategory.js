import React from "react";
import ListAllProducts from "./ListAllProducts";


function ListProductsFilterCategory({cat, cars}) {

    return (
        cars.map((carCategory) => {
            if (carCategory.category === cat) {
                return carCategory.items.map((carItem) => {
                    return <ListAllProducts {...carItem} key={carItem.id}/>
                })
            } else if (cat === null) {
                return carCategory.items.map((carItem) => {
                    return <ListAllProducts {...carItem} key={carItem.id}/>
                })
            }
        })

    )
}

export default ListProductsFilterCategory;