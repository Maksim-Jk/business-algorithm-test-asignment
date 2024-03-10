import {createRoot} from "react-dom/client";
import {useEffect, useRef, useState} from "react";
import {useEmployeesData} from "@/hooks";
import {getDayBirthEvents} from "@/helpers";
import FullCalendar from '@fullcalendar/react';

import {Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {calendarConfig} from "@/components/Calendar/lib/calendar.config.ts";

const Calendar = () => {
    const {rows} = useEmployeesData()
    const events = getDayBirthEvents(rows)
    const [month, setMonth] = useState<number>(new Date().getMonth())
    const calendarRef = useRef<FullCalendar>(null)

    useEffect(() => {
        const selectElement = document.createElement('div');
        const selectComponent = (
            <Select
                defaultValue={month}
                sx={{width: '156px'}}
                size='small'
                onChange={(e) => setMonth(Number(e.target.value))}>
                {Array.from({length: 12}, (_, i) => (
                    <MenuItem key={i} value={i}>{new Date(0, i).toLocaleString('ru', {month: 'long'})}</MenuItem>
                ))}
            </Select>
        );

        const firstToolbarChunk = document.querySelector('.fc-toolbar-chunk');

        if (firstToolbarChunk) {
            firstToolbarChunk.appendChild(selectElement);
        }

        const root = createRoot(selectElement);
        root.render(selectComponent);

        return () => {
            root.unmount();
            if (firstToolbarChunk && selectElement.parentNode) {
                firstToolbarChunk.removeChild(selectElement);
            }
        };
    }, []);

    useEffect(() => {
        const calendarApi = calendarRef.current?.getApi();
        if (calendarApi) {
            calendarApi.gotoDate(new Date(2024, month, 1));
        }
    }, [month, calendarRef]);

    return (
        <FullCalendar
            ref={calendarRef}
            events={events}
            {...calendarConfig}
        />
    );
}

export default Calendar