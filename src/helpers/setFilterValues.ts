import type {IFilter} from "@/models";

export const setFilterValues = (obj: IFilter, key: keyof IFilter, val: string) => {
    const newObj: IFilter = {...obj};

    Object.keys(newObj).forEach((filterKey: string) => {
        const typedKey = filterKey as keyof IFilter;
        newObj[typedKey] = undefined;
    });

    newObj[key] = val;
    return newObj;
};