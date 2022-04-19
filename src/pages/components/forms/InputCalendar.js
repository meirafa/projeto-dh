import React from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import * as locales from 'react-date-range/dist/locale';
import {pt} from "react-date-range/dist/locale";
import DateRangePicker from "react-date-range/dist/components/DateRangePicker";
import {addDays} from 'date-fns';
import DateRange from "react-date-range/dist/components/DateRange";
import {useWidth} from "../../../hooks/useWidth";
import {useUser} from "../../context/UserContext";

export const InputCalendar = () => {
    const width = useWidth();
    const {scheduleDates, setScheduleDates} = useUser();

    // const [state, setState] = React.useState([
    //     {
    //         startDate: new Date(),
    //         endDate: addDays(new Date(), 7),
    //         key: 'selection'
    //     }
    // ]);

    function handleSelect(ranges){
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }

    const selectionRange = {
        startDate: scheduleDates[0].toDate(),
        endDate: scheduleDates[1].toDate(),
        key: 'selection',
    };

    return (
        (width > 766) ?
            <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                months={2}
                locale={locales[pt]}
                ranges={[selectionRange]}
                onChange={handleSelect}
                direction="horizontal"
            />
            :
            <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                months={2}
                locale={locales[pt]}
                ranges={[selectionRange]}
                onChange={handleSelect}
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