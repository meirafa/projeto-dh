import TitleBgBlack from "./titles/TitleBgBlack";
import React from "react";
import Tabs from 'antd/lib/tabs';
import ListProductsFilterCategory from "./cards/product/ListProductsFilterCategory";
import {useParams, useNavigate} from "react-router";
import {useApis} from "../../hooks/useApi";
import Marca from "./Marca";
import {ComponentInputHome} from "./forms/ComponentInputHome";
import ListProductsFilterCity from "./cards/product/ListProductsFilterCity";
import ListAllProducts from "./cards/product/ListAllProducts";

const {TabPane} = Tabs;

const categories = [
    {
        key: 'all',
        title: 'Nossa Frota'
    },
    {
        key: 'suvs',
        title: 'SUVs'
    }, {
        key: 'conversiveis',
        title: 'Conversíveis'
    }, {
        key: 'esportivos',
        title: 'Esportivos'
    }, {
        key: 'picapes',
        title: 'Picapes'
    },
];


function Products() {
    let {category = 'all'} = useParams();
    let {city = 'all'} = useParams();

    const navigate = useNavigate();

    const [addressResult, isLoading] = useApis('/jsons/apiCars.json');
    const address = addressResult?.carsList || [];

    function tabsModified(key) {
        navigate(`/categorias/${key}/${city}`)
    }

    const title = {span: "conheça nossa frota", title: "frota"};

    return (
        <>
            {!!isLoading ? 'Carregando...' : null}

            <section className="bg-input-home">
                <ComponentInputHome/>
            </section>

            <article className="bg-black">
                <div className="container">
                    <TitleBgBlack {...title}/>

                    <Tabs defaultActiveKey={category} onChange={tabsModified}>
                        {categories.map(item => {
                            return <TabPane
                                tab={<span>{item.title}</span>}
                                key={item.key}
                            >

                                <div className="produtos">
                                    {address.map((addItems, key) => {
                                        if (category === 'all') {
                                            if (addItems.city.name === city) {
                                                return (
                                                    <ListProductsFilterCity
                                                        address={addItems}
                                                        key={key}/>
                                                )
                                            } else if (city === 'all') {
                                                return (
                                                    <ListAllProducts {...addItems} key={key}/>
                                                )
                                            }
                                        }
                                        if (addItems.category.title === category) {
                                            if (addItems.city.name === city) {
                                                return (
                                                    <ListProductsFilterCity
                                                        address={addItems}
                                                        key={key}/>
                                                )
                                            } else if (city === 'all') {
                                                return (
                                                    <ListAllProducts {...addItems} key={key}/>
                                                )
                                            }
                                        }
                                    })}
                                </div>
                            </TabPane>
                        })}
                    </Tabs>
                </div>
            </article>
            <Marca/>
        </>
    )
}

export default Products;