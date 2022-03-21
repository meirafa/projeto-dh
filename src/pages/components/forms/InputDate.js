import * as React from 'react';
import ptLocale from 'date-fns/locale/pt-BR/index';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import addWeeks from 'date-fns/addWeeks';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import {useWidth} from "../../../hooks/useWidth";
import TextField from '@mui/material/TextField';

export default function InputDate() {
    const [value, setValue] = React.useState([null, null]);
    const width = useWidth();

    function getWeeksAfter(date, amount) {
        return date ? addWeeks(date, amount) : undefined;
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptLocale}>
            <Stack spacing={3}>
                {(width < 830) ?
                    <MobileDateRangePicker
                        value={value}
                        disablePast
                        maxDate={getWeeksAfter(value[0], 4)}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <>
                                <TextField {...startProps} id="filled-basic" label="Retirada" variant="filled"/>
                                <Box sx={{mx: 1}}/>
                                <TextField {...endProps} id="filled-basic" label="Devolução" variant="filled"/>
                            </>
                        )}/>
                    :
                    <DesktopDateRangePicker
                        value={value}
                        disablePast
                        maxDate={getWeeksAfter(value[0], 4)}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <>
                                <TextField {...startProps} id="filled-basic" label="Retirada" variant="filled"/>
                                <Box sx={{mx: 1}}/>
                                <TextField {...endProps} id="filled-basic" label="Devolução" variant="filled"/>
                            </>
                        )}
                    />
                }
            </Stack>
        </LocalizationProvider>
    );
}
