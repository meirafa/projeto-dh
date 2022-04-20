import React from 'react';
import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import locale from 'antd/lib/locale/pt_BR';
import DatePicker from 'antd/lib/date-picker';
import ConfigProvider from "antd/lib/config-provider";
import {useWidth} from "../../../hooks/useWidth";
import DateResponsive from "../forms/DateResponsive";
import {useUser} from "../../context/UserContext";
import {useLocalStorage} from "../../../hooks/useLocalStorage";

const {RangePicker} = DatePicker;

const InputDate = () => {
    const {scheduleLocal, scheduleDates, setScheduleDates} = useUser();
    const width = useWidth();

    const [startValue, setStartValue] = useLocalStorage("dataRetirada", scheduleDates?.[0]);
    const [endValue, setEndValue] = useLocalStorage("dataDevolucao", scheduleDates?.[1]);

    const placeholder = ["Retirada", "Devolução"];

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().startOf('day');
    }

    function onChangeDate(dates) {
        setScheduleDates(dates);
        setStartValue(dates[0]);
        setEndValue(dates[1]);
    }

    //disabled
    const extraProps = {};
    (scheduleLocal) ? extraProps.disabled = false : extraProps.disabled = true;

    return (<>
        <ConfigProvider locale={locale}>
            {(width < 830) ?
                <DateResponsive {...extraProps}/>
                :
                <RangePicker
                    format="DD/MM/YYYY"
                    disabledDate={disabledDate}
                    ranges={{
                        'Hoje': [moment(), moment()],
                        'Este mês': [moment().startOf('day'), moment().endOf('month')],
                    }}
                    onChange={onChangeDate}
                    size="large"
                    placeholder={placeholder}
                    value={[moment(startValue), moment(endValue)]}
                    //value={scheduleDates}
                    {...extraProps}
                />
            }
        </ConfigProvider>
    </>)
};

export default InputDate;