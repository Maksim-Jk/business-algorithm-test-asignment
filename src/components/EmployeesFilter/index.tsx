import {FC} from "react";

import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {filtersNameLibrary} from "@/components/EmployeesTable/lib/employeesTable.data.ts";

import {setFilterValues} from "@/helpers/setFilterValues.ts";
import type {IEmployeesFilter, IEmployeesFilterOptions} from "@/models";


interface Props {
    filterOptions: IEmployeesFilterOptions;
    setFilter: (value: (prev: IEmployeesFilter) => IEmployeesFilter) => void;
    filter: IEmployeesFilter
}

const EmployeesFilter: FC<Props> = ({filterOptions, setFilter, filter}) => {
    return (
        <Box sx={{display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap'}}>
            {
                Object.entries(filterOptions).map(([key, value]) => (
                    <Autocomplete
                        key={key}
                        disablePortal
                        size='small'
                        id={`combo-box-${key}`}
                        options={value}
                        autoComplete={false}
                        sx={{width: {xs: '100%', md: '260px'},}}
                        value={filter[key as keyof IEmployeesFilter] || ''}
                        renderInput={(params) => (
                            <TextField {...params} label={filtersNameLibrary[key as keyof IEmployeesFilter]}/>
                        )}
                        onChange={(_, val: string | null) => {
                            setFilter((prev) => setFilterValues(prev, key as keyof IEmployeesFilter, val as string))
                        }
                        }
                    />
                ))
            }
        </Box>
    );
};

export default EmployeesFilter;