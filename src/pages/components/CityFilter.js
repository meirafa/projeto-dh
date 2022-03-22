import TitleBgBlack from "./titles/TitleBgBlack";
import React from "react";
import { Tabs, Select } from 'antd';
import ListProductsFilterCity from "./cards/product/ListProductsFilterCity";
import { useParams, useNavigate } from "react-router";
import { useApis } from "../../hooks/useApi";
import Marca from "./Marca";

const { TabPane } = Tabs;

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
    let { city = 'all' } = useParams();
    const navigate = useNavigate();

    const [cityResult, isLoading] = useApis('/jsons/bd_frota_specs.json');
    const cars = cityResult?.frotaList || [];


    const title = { span: "conheça nossa frota", title: "frota" };

    // Bloco filtro por InputSelect
    const [addressResult, isLoad] = useApis('/jsons/bd_frota_specs.json');

    //resultado pode ser nulo ou vazio ate carregar
    const address = addressResult?.frotaList || [];
    //carregando
    if (isLoad) return 'Loading';

    return (
        <>
            {!!isLoading ? 'Carregando...' : null}

            <section className="bg-black">
                <div className="container">
                    <TitleBgBlack {...title} />

                    <Select
                        showSearch
                        style={{ minWidth: 250 }}
                        placeholder="Selecionar Cidade"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                        size="large"
                    >
                        {
                            address.map((addItem, key) => {
                                return (<React.Fragment key={key}>

                                    <Option value={addItem.category}>{addItem.city}</Option>
                                </React.Fragment>)
                            })
                        }
                    </Select>

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

            <Marca />
        </>
    )
}

export default CityFilter;