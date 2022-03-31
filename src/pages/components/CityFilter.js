import TitleBgBlack from "./titles/TitleBgBlack";
import React from "react";
import Select from 'antd/lib/select';
import {useNavigate, useParams} from "react-router";
import {useApis} from "../../hooks/useApi";
import Marca from "./Marca";
import ListProductsFilterCity from "./cards/product/ListProductsFilterCity";
import ListAllProducts from "./cards/product/ListAllProducts";

const {Option} = Select;

function CityFilter() {
    let {city = 'all'} = useParams();

    const navigate = useNavigate();

    const title = {span: "conheça nossa frota", title: "frota"};

    // Bloco filtro por InputSelect
    const [addressResult, isLoad] = useApis('/jsons/apiCars.json');

    //resultado pode ser nulo ou vazio ate carregar
    const address = addressResult?.carsList || [];

    function enviandoValor(value) {
        navigate(`/reserva/${value}`);
    }

    const set = new Set([]);
    let newSet = [];

    return (
        <>
            {!!isLoad ? 'Carregando...' : null}

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
                            address.map((addItem) => {
                                set.add(addItem.city.name);
                                return newSet = [...set];
                            })
                        }
                        {
                            newSet.map((item, key) => {
                                return <Option value={item} key={key}>{item}</Option>
                            })
                        }
                    </Select>
                    <div className="produtos">
                        {address.map((addItems, key) => {
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
                        })}
                    </div>
                </div>
            </section>

            <Marca/>
        </>
    )
}

export default CityFilter;