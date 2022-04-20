import DatePicker from 'antd/lib/date-picker';
import React from 'react';
import moment from "moment";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {useUser} from "../../context/UserContext";

function DateResponsive(props) {
    const {scheduleDates, setScheduleDates} = useUser();
    const [startValue, setStartValue] = useLocalStorage("dataRetirada", scheduleDates[0]?.toDate());
    const [endValue, setEndValue] = useLocalStorage("dataDevolucao", scheduleDates[1]?.toDate());

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
        setScheduleDates([moment(startValue), moment(endValue)])
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
                value={moment(startValue)}
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
                disabledDate={disabledEndDate}
                format="DD-MM-YYYY"
                value={moment(endValue)}
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