import DatePicker from 'antd/lib/date-picker';
import React from 'react';
import moment from "moment";

function DateResponsive(props) {
    console.log(props)
    const [startValue, setStartValue] = React.useState();
    const [endValue, setEndValue] = React.useState();
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
                onChange={onStartChange}
                onOpenChange={handleStartOpenChange}
                size="large"
                placeholder="Retirada"
                value={startValue}
                {...props}
                showToday={false}
            />
            <DatePicker
                disabledDate={disabledEndDate}
                format="DD-MM-YYYY"
                onChange={onEndChange}
                open={endOpen}
                onOpenChange={handleEndOpenChange}
                size="large"
                placeholder="Devolução"
                value={endValue}
                {...props}
                showToday={false}
            />
        </>
    );
}

export default DateResponsive;