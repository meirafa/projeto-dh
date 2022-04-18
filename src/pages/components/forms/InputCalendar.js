import React from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import * as locales from 'react-date-range/dist/locale';
import {pt} from "react-date-range/dist/locale";
import DateRangePicker from "react-date-range/dist/components/DateRangePicker";
import {addDays} from 'date-fns';
import DateRange from "react-date-range/dist/components/DateRange";
import {useWidth} from "../../../hooks/useWidth";

export const InputCalendar = () => {
    const width = useWidth();

    const [state, setState] = React.useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    return (
        (width > 766) ?
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                months={2}
                locale={locales[pt]}
                direction="horizontal"
            />
            :
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                months={2}
                locale={locales[pt]}
            />
    )
};

// <DateRangePicker
//     onChange={item => setState([item.selection])}
//     showSelectionPreview={true}
//     moveRangeOnFirstSelection={false}
//     months={2}
//     ranges={state}
//     //direction="horizontal"
//     preventSnapRefocus={false}
//     //calendarFocus="backwards"
//     locale={locales[pt]}
// />