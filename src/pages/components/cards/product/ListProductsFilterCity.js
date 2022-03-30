import React from "react";
import ListAllProducts from "./ListAllProducts";

function ListProductsFilterCity({address}) {
            return <ListAllProducts {...address} key={address.id}/>
}

export default ListProductsFilterCity;