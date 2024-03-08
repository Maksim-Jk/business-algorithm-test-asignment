import type {IEmployeesFilter} from "@/models";

export const setFilterValues = (obj: IEmployeesFilter, key: keyof IEmployeesFilter, val: string) => {
    const newObj: IEmployeesFilter = {...obj};

    Object.keys(newObj).forEach((filterKey: string) => {
        const typedKey = filterKey as keyof IEmployeesFilter;
        newObj[typedKey] = undefined;
    });

    newObj[key] = val;
    return newObj;
};