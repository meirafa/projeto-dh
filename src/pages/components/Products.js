import TitleBgBlack from "./titles/TitleBgBlack";
import React from "react";
import {Tabs} from 'antd';
import ListProductsFilterCategory from "./cards/product/ListProductsFilterCategory";
import {useParams, useNavigate} from "react-router";
import {useApis} from "../../hooks/useApi";
import Marca from "./Marca";

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
        title: 'Conversiveis'
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
    const navigate = useNavigate();

    const [categoryResult, isLoading] = useApis('/jsons/bd_frota_specs.json');
    const cars = categoryResult?.frotaList || [];

    const title = {span: "conheça nossa frota", title: "frota"};

    return (
        <>
            {!!isLoading ? 'Carregando...' : null}

            <section className="bg-black">
                <div className="container">
                    <TitleBgBlack {...title}/>
                    <Tabs defaultActiveKey={category} onChange={(key) => {
                        navigate(`/categorias/${key}`)
                    }}>
                        {categories.map(item => {
                            return <TabPane
                                tab={<span>{item.title}</span>}
                                key={item.key}
                            >

                                <div className="produtos">
                                    <ListProductsFilterCategory
                                        cars={cars}
                                        cat={item.key === 'all' ? null : item.key}
                                    />
                                </div>
                            </TabPane>
                        })}
                    </Tabs>
                </div>
            </section>

            <Marca/>
        </>
    )
}

export default Products;