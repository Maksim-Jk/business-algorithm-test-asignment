import {useEffect, useState} from "react";
import type {IData, IFilter, IFilterOptions, IRows} from "@/models";

export const useEmployeesData = (filter: IFilter) => {
    const [rows, setRows] = useState<IRows[]>([]);
    const [filteredRows, setFilteredRows] = useState<IRows[]>([]);

    const [filterOptions, setFilterOptions] = useState<IFilterOptions>({
        individualIdentificationNumber: [],
        fullName: [],
        phoneNumber: []
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('data/employees.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                const updatedRows = data.map((row: IData) => ({
                    ...row,
                    fullName: concat(row.firstName, row.lastName, row.surName)
                }));
                setRows(updatedRows);
                setFilterOptions(getFilterOptions(updatedRows))

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let filteredRows = rows;

        if (filter.individualIdentificationNumber) {
            filteredRows = filteredRows
                .filter(row => row.individualIdentificationNumber === filter.individualIdentificationNumber)
        }

        if (filter.fullName) {
            filteredRows = filteredRows
                .filter(row => row.fullName === filter.fullName)
        }

        if (filter.phoneNumber) {
            filteredRows = filteredRows
                .filter(row => row.phoneNumber === filter.phoneNumber)
        }

        setFilteredRows(filteredRows);
    }, [filter, rows]);

    const rowsToReturn = filter.individualIdentificationNumber || filter.fullName || filter.phoneNumber ? filteredRows : rows

    return {rows: rowsToReturn, filterOptions};
}

function concat(...args: string[]): string {
    return args.join(' ');
}

const getFilterOptions = (rows: IRows[]) => {
    const individualIdentificationNumber = rows.map(row => (row.individualIdentificationNumber));
    const fullName = rows.map(row => (row.fullName));
    const phoneNumber = rows.map(row => (row.phoneNumber));
    return {individualIdentificationNumber, fullName, phoneNumber}
}
