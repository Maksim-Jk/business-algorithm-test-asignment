import dayjs from "dayjs";

export interface IWorkListColumn {
    id: string;
    label: string;
    minWidth: number;
    align?: 'left' | 'center' | 'right';
    format?: (value: number | string) => string;
}

export interface IWorkListData {
    id: number
    name: string
    date: string
    employeeId: number
}

export interface IWorkListRows {
    id: number
    name: string
    date: string
    employeeId: number
    employeeFullName: string
}

export interface IWorkListFilterOptions {
    employeeId: number[]
    employeeFullName: string[]
    date: string[]
}

export interface IWorkListFilter {
    dateFrom: dayjs.Dayjs | null
    dateTo: dayjs.Dayjs | null
    fullName: string | null
}