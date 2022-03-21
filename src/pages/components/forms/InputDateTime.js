import React from 'react';
import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import locale from 'antd/lib/locale/pt_BR';
import {DatePicker, TimePicker} from 'antd';
import ConfigProvider from "antd/es/config-provider";
import {useWidth} from "../../../hooks/useWidth";
import DateResponsive from "../forms/DateResponsive";

const {RangePicker} = DatePicker;

const InputDateTime = () => {

    const placeholder = ["Retirada", "Devolução"];
    const width = useWidth();

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().startOf('day');
    }

    function onChangeDate(dates, dateStrings) {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    }


    return (<>
        <ConfigProvider locale={locale}>
            {(width < 830) ?
                <DateResponsive/>
                :
                <RangePicker
                    format="DD/MM/YYYY"
                    disabledDate={disabledDate}
                    ranges={{
                        'Hoje': [moment(), moment()],
                        'Este mês': [moment().startOf('day'), moment().endOf('month')],
                    }}
                    onChange={onChangeDate}
                    //separator="to"
                    size="large"
                    placeholder={placeholder}
                />
            }
            <TimePicker size="large" onChange={value => console.log(value)}/>
        </ConfigProvider>
    </>)
};

export default InputDateTime;