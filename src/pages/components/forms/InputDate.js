import React from 'react';
import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import locale from 'antd/lib/locale/pt_BR';
import DatePicker from 'antd/lib/date-picker';
import ConfigProvider from "antd/lib/config-provider";
import {useWidth} from "../../../hooks/useWidth";
import DateResponsive from "../forms/DateResponsive";

const {RangePicker} = DatePicker;

const InputDateTime = () => {

    const [dateRetState, setDateRetState] = React.useState(localStorage.getItem("dataRetirada"));

    React.useEffect(() => {
        localStorage.setItem( "dataRetirada", dateRetState)
    }, [dateRetState])

    const [dateDevoState, setDateDevoState] = React.useState(localStorage.getItem("dataDevolucao"));

    React.useEffect(() => {
        localStorage.setItem( "dataDevolucao", dateDevoState)
    }, [dateDevoState])

    
    const placeholder = ["Retirada", "Devolução"];
    const width = useWidth();

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().startOf('day');
    }

    
    function onChangeDate(dates, dateStrings) {
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        
        setDateRetState(dates[0]);
        setDateDevoState(dates[1]);
        console.log()
        /* localStorage.setItem("dataRetirada",dateStrings[0])
        localStorage.setItem("dataDevolucao", dateStrings[1]) */
        
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
                    value={[moment(dateRetState), moment(dateDevoState)]}                    
                />
            }
        </ConfigProvider>
    </>)
};

export default InputDateTime;