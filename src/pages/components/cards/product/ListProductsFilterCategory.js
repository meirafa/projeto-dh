import React from "react";
import ListAllProducts from "./ListAllProducts";


function ListProductsFilterCategory({cat, cars}) {
    return (
        cars.map((carCategory, key) => {
            if (carCategory.category.title === cat) {
                    return <ListAllProducts {...carCategory} key={key}/>
            } else if (cat === null) {
                    return <ListAllProducts {...carCategory} key={key}/>
            }
        })

    )
}

export default ListProductsFilterCategory;