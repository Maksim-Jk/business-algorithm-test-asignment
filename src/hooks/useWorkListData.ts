import {useEffect, useState} from "react";
import {
    IEmployeesData,
    IWorkListRows
} from "@/models";
import {fetchData} from "@/helpers/fetchData.ts";

export const useWorkListData = () => {
    const [rows, setRows] = useState<IWorkListRows[]>([]);
    // const [filteredRows, setFilteredRows] = useState<IWorkListRows[]>([]);
    // const [filterOptions, setFilterOptions] = useState<IWorkListFilterOptions>({
    //     employeeId: [],
    //     employeeFullName: [],
    //     date: []
    // })

    useEffect(() => {
        const fetchEmployeesData = async () => {
            const employeesData: IEmployeesData[] = await fetchData('data/employees.json');
            const worksData: IWorkListRows[] = await fetchData('data/works.json');

            const updatedRows = worksData.map((row) => {
                const employee = employeesData.find((emp) => emp.id === row.employeeId)
                if (employee) {
                    return {
                        ...row,
                        employeeFullName: concat(employee.firstName, employee.lastName, employee.surName)
                    }
                } else {
                    return {
                        ...row,
                        employeeFullName: 'Неизвестно'
                    }
                }
            })
            setRows(updatedRows);
        };
        fetchEmployeesData()
    }, [])


    // useEffect(() => {
    //     let filteredRows = rows;
    //
    //     if (filter.individualIdentificationNumber) {
    //         filteredRows = filteredRows
    //             .filter(row => row.individualIdentificationNumber === filter.individualIdentificationNumber)
    //     }
    //
    //     if (filter.fullName) {
    //         filteredRows = filteredRows
    //             .filter(row => row.fullName === filter.fullName)
    //     }
    //
    //     if (filter.phoneNumber) {
    //         filteredRows = filteredRows
    //             .filter(row => row.phoneNumber === filter.phoneNumber)
    //     }
    //
    //     setFilteredRows(filteredRows);
    // }, [filter, rows]);

    // const rowsToReturn = filter.individualIdentificationNumber || filter.fullName || filter.phoneNumber ? filteredRows : rows
    const fullNameOptions = [...new Set(rows.map(row => (row.employeeFullName)))];
    return {rows, fullNameOptions};
}

function concat(...args: string[]): string {
    return args.join(' ');
}

// const getFilterOptions = (rows: IWorkListRows[], employeesData: IEmployeesData[]) => {
//     const employeeId = rows.map(row => (row.employeeId));
//     const employeeFullName = employeeId.map(id => {
//         const employee = employeesData.find((emp: IEmployeesData) => emp.id === id)
//         if (employee) {
//             return concat(employee.firstName, employee.lastName, employee.surName)
//         }
//     })
//     const date = rows.map(row => (row.date));
//     return {employeeId, employeeFullName, date}
// }
