import React from 'react';
import 'antd/dist/antd.css';
import Select from 'antd/lib/select';
import {useApis} from "../../../hooks/useApi";
import {useNavigate, useParams} from "react-router";
import {useUser} from "../../context/UserContext";
import moment from "moment";

const {Option} = Select;

function InputSelect() {
    const {scheduleLocal, setScheduleLocal} = useUser();

// Bloco filtro por InputSelect
    const [addressResult, isLoad] = useApis('/jsons/apiCars.json');

    //resultado pode ser nulo ou vazio ate carregar
    const address = addressResult?.carsList || [];

    function enviandoValor(value) {
        setScheduleLocal(value);
        //navigate(`/reserva/${value}`);
    }

    const set = new Set([]);
    let newSet = [];

    return (
        <>
            {!!isLoad ? 'Carregando...' : null}
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
                        return <Option
                            value={item}
                            key={key}>{item}</Option>
                    })
                }
            </Select>
        </>)
}

export default InputSelect;