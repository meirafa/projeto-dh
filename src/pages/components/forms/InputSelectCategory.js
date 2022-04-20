import React from 'react';
import 'antd/dist/antd.css';
import Select from 'antd/lib/select';
import { useApis } from "../../../hooks/useApi";
import { useUser } from "../../context/UserContext";
import { appConfig } from '../../../appConfig';
import CarCreate from '../../CarCreate';

const { Option } = Select;

function InputSelectCategory() {

    // Bloco filtro por InputSelect
    const [categoryResult, isLoad] = useApis(appConfig.apiUrl + "/categories");

    //resultado pode ser nulo ou vazio ate carregar
    const category = categoryResult || [];

    function enviandoValor(value) {
        console.log(value)

        // setScheduleCategory(value);
    }

    // let selectValue = {};

    // const set = new Set([]);
    // let newSet = [...selectValue];

    /* React.useEffect(() => {

        fetch(appConfig.apiUrl + '/categories', {
             method: 'GET',
             headers: {
                 "Content-Type": "application/json;"
             },
         })
            // conventendo o http response em um objeto json
            .then(res => {
                console.log(res)
                if (res.ok) {
                    return res.json()
                } 
            })

    },[]) */

    return (
        <>
            {!!isLoad ? 'Carregando...' : null}
            <Select
                showSearch
                style={{ minWidth: 250 }}
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
            // defaultValue={scheduleCategory}
            >
                {
                    category.map((addItem) => {
                        return <Option value={addItem.id} key={addItem.id}>
                        {addItem.title}</Option>
                        // return selectValue;
                    })
                }
                {
                    
                }
            </Select>
        </>)
}

export default InputSelectCategory;