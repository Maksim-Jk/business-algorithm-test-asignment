import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";
import {FC} from "react";
import Box from "@mui/material/Box";
import {IFilter, IFilterOptions} from "@/models/employeesData.type.ts";
import {setFilterValues} from "@/helpers/setFilterValues.ts";
import {filtersNameLibrary} from "@/pages/EmployeesPage/lib/employeesTable.data.ts";

interface IEmployeesFilterProps {
    filterOptions: IFilterOptions;
    setFilter: (value: (prev: IFilter) => IFilter) => void;
    filter: IFilter
}

const EmployeesFilter: FC<IEmployeesFilterProps> = ({filterOptions, setFilter, filter}) => {
    console.log(Object.entries(filterOptions))
    return (
        <Box sx={{display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap'}}>
            {
                Object.entries(filterOptions).map(([key, value]) => (
                    <Autocomplete
                        key={key}
                        disablePortal
                        id={`combo-box-${key}`}
                        options={value}
                        sx={{width: {xs: '100%', md: '260px'},}}
                        value={filter[key as keyof IFilter] || ''}
                        renderInput={(params) => (
                            <TextField {...params} label={filtersNameLibrary[key as keyof IFilter]}/>
                        )}
                        onChange={(_, val: string | null) => {
                            setFilter((prev) => setFilterValues(prev, key as keyof IFilter, val as string))
                        }
                        }
                    />
                ))
            }
        </Box>
    );
};

export default EmployeesFilter;