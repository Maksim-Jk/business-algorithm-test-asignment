import {useEffect, useState} from "react";

interface IData {
    firstName: string
    lastName: string
    surName: string
    gender: string
    birthDate: string
    phoneNumber: string
    address: string
    email: string
    individualIdentificationNumber: string
}

interface IRows {
    fullName: string
    gender: string
    birthDate: string
    phoneNumber: string
    address: string
    email: string
    individualIdentificationNumber: string
}

export interface IFilter {
    individualIdentificationNumber: string | undefined
    fullName: string | undefined
    phoneNumber: string | undefined
}

export interface IFilterOption {
    label: string
}

export interface IFilterOptions {
    individualIdentificationNumber: IFilterOption[]
    fullName: IFilterOption[]
    phoneNumber: IFilterOption[]
}

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
    const individualIdentificationNumber = rows.map(row => ({label: row.individualIdentificationNumber}));
    const fullName = rows.map(row => ({label: row.fullName}));
    const phoneNumber = rows.map(row => ({label: row.phoneNumber}));
    return {individualIdentificationNumber, fullName, phoneNumber}
}
