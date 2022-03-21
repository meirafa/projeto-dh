import {DatePicker} from 'antd';
import React from 'react';
import moment from "moment";

function DateResponsive() {
    const [startValue, setStartValue] = React.useState(null);
    const [endValue, setEndValue] = React.useState(null);
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
                value={startValue}
                onChange={onStartChange}
                onOpenChange={handleStartOpenChange}
                ranges={{
                    'Hoje': [moment(), moment()]
                }}
                size="large"
                placeholder="Retirada"
            />
            <DatePicker
                disabledDate={disabledEndDate}
                format="DD-MM-YYYY"
                value={endValue}
                onChange={onEndChange}
                open={endOpen}
                onOpenChange={handleEndOpenChange}
                size="large"
                placeholder="Devolução"
            />
        </>
    );
}

export default DateResponsive;