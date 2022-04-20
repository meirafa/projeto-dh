import DatePicker from 'antd/lib/date-picker';
import React from 'react';
import moment from "moment";
import {useUser} from "../../context/UserContext";

function DateResponsive(props) {

    const {setScheduleDates} = useUser();

    const [startValue, setStartValue]= React.useState(() => {
        const dataRetirada = localStorage.getItem("dataRetirada");
        if (!dataRetirada) return;
        return moment(dataRetirada);
    });

    React.useEffect(() => {
        localStorage.setItem("dataRetirada", startValue?.startOf('day').toISOString())
    }, [startValue]);

    const [endValue, setEndValue] = React.useState(() => {
        const dataDevolucao = localStorage.getItem("dataDevolucao");
        if (!dataDevolucao) return;
        return moment(dataDevolucao);
    });

    React.useEffect(() => {
        localStorage.setItem("dataDevolucao", endValue?.endOf('day').toISOString())
    }, [endValue]);

    const [endOpen, setEndOpen] = React.useState(false);

    function disabledStartDate(current) {
        // Can not select days before today and today
        return current && current < moment().startOf('day');
    }

    function disabledEndDate(current) {
        return current && current < moment(startValue).startOf('day');
    }

    function onStartChange(value) {
        setEndValue(null);
        setStartValue(value);
    }

    function onEndChange(value) {
        setEndValue(value);
        setScheduleDates([startValue, value]);
    }

    function handleStartOpenChange(open) {
        if (!open) {
            setEndOpen(true);
        }
    }

    function handleEndOpenChange(open) {
        setEndOpen(open);
    }


    return (
        <>
            <DatePicker
                showToday={false}
                disabledDate={disabledStartDate}
                format="DD-MM-YYYY"
                value={startValue}
                onChange={onStartChange}
                onOpenChange={handleStartOpenChange}
                ranges={{
                    'Hoje': [moment(), moment()]
                }}
                size="large"
                placeholder="Retirada"
                {...props}

            />
            <DatePicker
                showToday={false}
                disabledDate={disabledEndDate}
                format="DD-MM-YYYY"
                value={endValue}
                onChange={onEndChange}
                open={endOpen}
                onOpenChange={handleEndOpenChange}
                size="large"
                placeholder="Devolução"
                {...props}
            />
        </>
    );
}

export default DateResponsive;