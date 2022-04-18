import React from 'react';
import 'antd/dist/antd.css';
import 'moment/locale/pt-br';
import locale from 'antd/lib/locale/pt_BR';
import TimePicker from 'antd/lib/time-picker';
import ConfigProvider from "antd/lib/config-provider";
import InputDate from "./InputDate";

const InputDateTime = () => {

    function onChangeTime(times, timesStrings) {
        console.log('Time: ', timesStrings)
    }

    return (<>
        <ConfigProvider locale={locale}>
            <InputDate/>
            <TimePicker size="large" onChange={onChangeTime}/>
        </ConfigProvider>
    </>)
};

export default InputDateTime;