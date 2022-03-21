import React from 'react';
import 'antd/dist/antd.css';
import {Select} from 'antd';
import {useApis} from "../../../hooks/useApi";

const {Option} = Select;

function InputSelect() {
    const [addressResult, isLoading] = useApis('/jsons/address.json');

    //resultado pode ser nulo ou vazio ate carregar
    const address = addressResult?.addressList || [];
    //carregando
    if (isLoading) return 'Loading';

    return (
        <>
            <Select
                showSearch
                style={{minWidth: 200}}
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
                            <Option value={addItem.id}>{addItem.cidade}</Option>
                        </React.Fragment>)
                    })
                }
            </Select>
        </>)
}

export default InputSelect;