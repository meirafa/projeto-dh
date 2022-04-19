import React from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import * as locales from 'react-date-range/dist/locale';
import {pt} from "react-date-range/dist/locale";
import DateRange from "react-date-range/dist/components/DateRange";
import {useWidth} from "../../../hooks/useWidth";
import {useUser} from "../../context/UserContext";
import * as moment from "moment";

export const InputCalendar = () => {
    const width = useWidth();
    const {scheduleDates, setScheduleDates} = useUser();
    const hasDates = scheduleDates?.[0] && scheduleDates?.[1];

    const range = (hasDates ? [{
        startDate: scheduleDates[0]?.toDate(),
        endDate: scheduleDates[1]?.toDate(),
        key: 'selection'
    }] : [{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);

    function handleSelect(ranges) {
        setScheduleDates([moment(ranges.selection.startDate), moment(ranges.selection.endDate)]);
    }

    return (
        (width > 766) ?
            <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                months={2}
                locale={locales[pt]}
                minDate={new Date()}
                ranges={range}
                onChange={handleSelect}
                direction="horizontal"
            />
            :
            <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                months={2}
                locale={locales[pt]}
                minDate={new Date()}
                ranges={range}
                onChange={handleSelect}
            />
    )
};