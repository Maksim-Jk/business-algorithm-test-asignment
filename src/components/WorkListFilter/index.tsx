import {Dispatch, FC, SetStateAction} from "react";
import dayjs from "dayjs";

import Box from "@mui/material/Box";
import {DatePicker} from "@mui/x-date-pickers";
import {IWorkListFilter} from "@/models";
import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";

interface Props {
    filter: IWorkListFilter;
    setFilter: Dispatch<SetStateAction<IWorkListFilter>>
    fullNameOptions: string[]
}

const WorkListFilter: FC<Props> = ({filter, setFilter, fullNameOptions}) => {
    const handleDateChange = (newVal: dayjs.Dayjs | null, field: "dateFrom" | "dateTo") => {
        setFilter({...filter, [field]: dayjs(newVal)})
    }

    return (
        <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap'}}>
            <DatePicker
                label="Дата от"
                value={filter.dateFrom}
                sx={{width: {xs: '100%', md: '260px'}}}
                slotProps={{textField: {size: 'small'}}}
                onChange={(newVal) => handleDateChange(newVal, "dateFrom")}
            />
            <DatePicker
                label="Дата до"
                value={filter.dateTo}
                sx={{width: {xs: '100%', md: '260px'}}}
                slotProps={{textField: {size: 'small'}}}
                onChange={(newVal) => handleDateChange(newVal, "dateTo")}
            />
            <Autocomplete
                key={'employeeFullName'}
                disablePortal
                autoComplete={false}
                id={`combo-box-employeeFullName`}
                options={fullNameOptions}
                sx={{width: {xs: '100%', md: '260px'}}}
                size='small'
                renderInput={(params) => (
                    <TextField {...params} label='Полное имя'/>
                )}
                onChange={(_, val: string | null) => {
                    setFilter((prev) => ({...prev, employeeFullName: val}))
                }}
            />
        </Box>
    );
};

export default WorkListFilter;
