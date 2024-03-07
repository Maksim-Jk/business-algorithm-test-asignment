import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";
import {IFilter, IFilterOption, IFilterOptions} from "@/hooks/useFetchEmployees.ts";
import {FC} from "react";
import Box from "@mui/material/Box";

interface IEmployeesFilterProps {
    filterOptions: IFilterOptions;
    setFilter: (value: (prev: IFilter) => IFilter) => void;
}

const EmployeesFilter: FC<IEmployeesFilterProps> = ({filterOptions, setFilter}) => {
    console.log(Object.entries(filterOptions))
    return (
        <Box sx={{display: 'flex', gap: 2, mb: 2}}>
            {
                Object.entries(filterOptions).map(([key, value]) => (
                    <Autocomplete
                        key={key}
                        disablePortal
                        id={`combo-box-${key}`}
                        options={value}
                        sx={{width: 300}}
                        renderInput={(params) => <TextField {...params} label={key}/>}
                        onChange={(_, val: IFilterOption | null) => {
                            setFilter((prev) => setFilterValues(prev, key as keyof IFilter, val?.label as string))
                        }
                        }
                    />
                ))
            }
        </Box>
    );
};

export default EmployeesFilter;


const setFilterValues = (obj: IFilter, key: keyof IFilter, val: string) => {
    const newObj: IFilter = { ...obj };

    Object.keys(newObj).forEach((filterKey: string) => {
        const typedKey = filterKey as keyof IFilter;
        newObj[typedKey] = undefined;
    });

    newObj[key] = val;
    return newObj;
};