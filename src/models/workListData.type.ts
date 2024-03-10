import dayjs from "dayjs";

export interface IWorkListColumn {
    id: string;
    label: string;
    minWidth: number;
    align?: 'left' | 'center' | 'right';
    format?: (value: number | string) => string;
}

export interface IWorkListRows {
    id: number
    name: string
    date: string
    employeeId: number
    employeeFullName: string
}

export interface IWorkListFilter {
    dateFrom: dayjs.Dayjs | null
    dateTo: dayjs.Dayjs | null
    employeeFullName: string | null
}

export interface IWorkData {
    id?: number
    name?: string
    employeeFullName?: string
    date?: string
}