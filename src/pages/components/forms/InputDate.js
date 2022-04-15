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

const {RangePicker} = DatePicker;

const InputDate = () => {
    const {scheduleDates, setScheduleDates} = useUser();
    const width = useWidth();

    const [dateRetState, setDateRetState] = React.useState(() => {
        const dataRetirada = localStorage.getItem("dataRetirada");
        if (!dataRetirada) return;
        return moment(dataRetirada);
    });

    React.useEffect(() => {
        localStorage.setItem("dataRetirada", dateRetState?.startOf('day').toISOString())
    }, [dateRetState]);

    const [dateDevoState, setDateDevoState] = React.useState(() => {
        const dataDevolucao = localStorage.getItem("dataDevolucao");
        if (!dataDevolucao) return;
        return moment(dataDevolucao);
    });

    React.useEffect(() => {
        localStorage.setItem("dataDevolucao", dateDevoState?.endOf('day').toISOString())
    }, [dateDevoState]);

    const placeholder = ["Retirada", "Devolução"];

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().startOf('day');
    }

    function onChangeDate(dates) {
        setScheduleDates(dates);

        setDateRetState(dates[0]);
        setDateDevoState(dates[1]);
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
                    size="large"
                    placeholder={placeholder}
                    value={scheduleDates}
                />
            }
        </ConfigProvider>
    </>)
};

export default InputDate;