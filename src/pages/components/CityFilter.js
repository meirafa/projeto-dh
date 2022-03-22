import TitleBgBlack from "./titles/TitleBgBlack";
import React from "react";
import {Select} from 'antd';
import {useParams, useNavigate} from "react-router";
import {useApis} from "../../hooks/useApi";
import Marca from "./Marca";
import ListProductsFilterCity from "./cards/product/ListProductsFilterCity";

const {Option} = Select;

const cities = [
    {
        key: 'all',
        title: 'Todos os Locais'
    },
    {
        key: 'Sao Paulo',
        title: 'São Paulo'
    }, {
        key: 'Rio de Janeiro',
        title: 'Rio'
    }, {
        key: 'Belo Horizonte',
        title: 'BH'
    }, {
        key: 'Brasilia',
        title: 'Brasilia'
    },
];


function CityFilter() {

    let {city = 'all'} = useParams();
    const navigate = useNavigate();

    const title = {span: "conheça nossa frota", title: "frota"};

    // Bloco filtro por InputSelect
    const [addressResult, isLoad] = useApis('/jsons/bd_frota_specs.json');

    //resultado pode ser nulo ou vazio ate carregar
    const address = addressResult?.frotaList || [];
    //carregando
    if (isLoad) return 'Loading';

    function enviandoValor(value) {
        navigate(`/reserva/${value}`)
    }

    return (
        <>

            <section className="bg-black">
                <div className="container">
                    <TitleBgBlack {...title} />

                    <Select
                        showSearch
                        style={{minWidth: 250}}
                        placeholder="Selecionar Cidade"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                        size="large"
                        onSelect={enviandoValor}
                    >
                        {
                            address.map((addItem, key) => {
                                return <Option value={addItem.city} key={key}>{addItem.city}</Option>
                            })
                        }
                    </Select>

                    <div className="produtos">
                        {address.map(addItem => {
                            addItem.items.map((item, key) => {
                                return (
                                    <div className="produtos" key={key}>
                                        console.log(item)
                                        {/*<ListProductsFilterCity*/}
                                        {/*    city={city}*/}
                                        {/*    city={item.key === 'all' ? null : item.key}*/}
                                        {/*/>*/}
                                    </div>
                                )
                            });
                        })}
                    </div>

                    {/*  <Tabs defaultActiveKey={city} onChange={(key) => {
                        navigate(`/reserva/${key}`)
                    }}>
                        {cities.map(item => {
                            return <TabPane
                                tab={<span>{item.title}</span>}
                                key={item.key}
                            >

                                <div className="produtos">
                                    <ListProductsFilterCity
                                        cars={cars}
                                        cat={item.key === 'all' ? null : item.key}
                                    />
                                </div>
                            </TabPane>
                        })}
                    </Tabs> */}
                </div>
            </section>

            <Marca/>
        </>
    )
}

export default CityFilter;