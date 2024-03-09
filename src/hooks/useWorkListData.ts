import {useEffect, useState} from "react";
import {
    IEmployeesData, IWorkListFilter,
    IWorkListRows
} from "@/models";
import {fetchData} from "@/helpers/fetchData.ts";

export const useWorkListData = (filter: IWorkListFilter, isModalOpen: boolean) => {
    const [rows, setRows] = useState<IWorkListRows[]>([]);
    const [filteredRows, setFilteredRows] = useState<IWorkListRows[]>([]);

    useEffect(() => {
        const getWorkListData = async () => {
            if (localStorage.getItem('workListData')) {
                const data = JSON.parse(localStorage.getItem('workListData')!);
                setRows(data);
                return
            }
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
            localStorage.setItem('workListData', JSON.stringify(updatedRows));
        };
        getWorkListData()
    }, [isModalOpen])


    useEffect(() => {
        let filteredRows = rows;

        if (filter.dateFrom) {
            filteredRows = filteredRows.filter(row => filter.dateFrom?.isBefore(row.date));
        }

        if (filter.dateTo) {
            filteredRows = filteredRows.filter(row => filter.dateTo?.isAfter(row.date));
        }

        if (filter.employeeFullName) {
            filteredRows = filteredRows
                .filter(row => row.employeeFullName === filter.employeeFullName)
        }

        setFilteredRows(filteredRows);
    }, [filter, rows]);

    const rowsToReturn = filter.dateFrom || filter.dateTo || filter.employeeFullName ? filteredRows : rows
    const fullNameOptions = [...new Set(rows.map(row => (row.employeeFullName)))];
    return {rows: rowsToReturn, fullNameOptions};
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
