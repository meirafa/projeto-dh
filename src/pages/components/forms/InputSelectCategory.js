import React from 'react';
import 'antd/dist/antd.css';
import Select from 'antd/lib/select';
import {useApis} from "../../../hooks/useApi";
import {useUser} from "../../context/UserContext";

const {Option} = Select;

function InputSelectCategory() {
    const {scheduleCategory, setScheduleCategory} = useUser();

// Bloco filtro por InputSelect
    const [categoryResult, isLoad] = useApis('/jsons/apiCars.json');

    //resultado pode ser nulo ou vazio ate carregar
    const category = categoryResult?.carsList || [];

    function enviandoValor(value) {
        setScheduleCategory(value);
    }

    const set = new Set([]);
    let newSet = [];

    return (
        <>
            {!!isLoad ? 'Carregando...' : null}
            <Select
                showSearch
                style={{minWidth: 250}}
                placeholder="Selecionar Categoria"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
                size="large"
                onSelect={enviandoValor}
                defaultValue={scheduleCategory}
            >
                {
                    category.map((addItem) => {
                        set.add(addItem.category.title);
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

export default InputSelectCategory;