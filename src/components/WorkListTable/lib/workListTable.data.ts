import {IWorkListColumn} from "@/models";

export const columns: IWorkListColumn[] = [
    {id: 'id', label: 'ID', minWidth: 70},
    {id: 'employeeFullName', label: 'Сотрудник', minWidth: 140},
    {id: 'name', label: 'Выполненная работа', minWidth: 70},
    {id: 'date', label: 'Дата', minWidth: 140},
];
