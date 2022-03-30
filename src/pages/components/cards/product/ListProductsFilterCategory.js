import React from "react";
import ListAllProducts from "./ListAllProducts";


function ListProductsFilterCategory({cat, cars}) {
    return (
        cars.map((carCategory) => {
            console.log(carCategory.category.title, cat)
            if (carCategory.category.title === cat) {
                    return <ListAllProducts {...carCategory} key={carCategory.id}/>
            } else if (cat === null) {
                    return <ListAllProducts {...carCategory} key={carCategory.id}/>
            }
        })

    )
}

export default ListProductsFilterCategory;