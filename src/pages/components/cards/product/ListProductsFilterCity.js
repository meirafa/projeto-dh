import React from "react";
import ListAllProducts from "./ListAllProducts";

function ListProductsFilterCity({address, id}) {
            return <ListAllProducts {...address} key={id}/>
}

export default ListProductsFilterCity;