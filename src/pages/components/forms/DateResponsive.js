import DatePicker from 'antd/lib/date-picker';
import React from 'react';
import moment from "moment";
import {useLocalStorage} from "../../../hooks/useLocalStorage";

function DateResponsive(props) {
    const {dates} = props;

    const [startValue, setStartValue] = useLocalStorage("dataRetirada", dates?.[0]);
    const [endValue, setEndValue] = useLocalStorage("dataDevolucao", dates?.[1]);
    const [endOpen, setEndOpen] = React.useState(false);
    console.log(dates)
    console.log(startValue)
    console.log(moment(startValue))
    function disabledStartDate(current) {
        // Can not select days before today and today
        return current && current < moment().startOf('day');
    }

    function disabledEndDate(current) {
        return current && current < moment(startValue).startOf('day');
    }

    function onStartChange(value) {
        setEndValue(undefined);
        setStartValue(value.toDate());
    }

    function onEndChange(value) {
        setEndValue(value.toDate());
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
                disabledDate={disabledStartDate}
                format="DD-MM-YYYY"
                onChange={onStartChange}
                onOpenChange={handleStartOpenChange}
                ranges={{
                    'Hoje': [moment(), moment()]
                }}
                size="large"
                placeholder="Retirada"
                value={moment(startValue)}
                {...props.disabled}
            />
            <DatePicker
                disabledDate={disabledEndDate}
                format="DD-MM-YYYY"
                value={moment(endValue)}
                onChange={onEndChange}
                open={endOpen}
                onOpenChange={handleEndOpenChange}
                size="large"
                placeholder="Devolução"
                {...props.disabled}
            />
        </>
    );
}

export default DateResponsive;