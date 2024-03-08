export interface IEmployeesColumn {
    id: string;
    label: string;
    minWidth: number;
    align?: 'left' | 'center' | 'right';
    format?: (value: number | string) => string;
}

export interface IEmployeesData {
    id: number
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

export interface IEmployeesRows {
    id: number
    fullName: string
    gender: string
    birthDate: string
    phoneNumber: string
    address: string
    email: string
    individualIdentificationNumber: string
}

export interface IEmployeesFilter {
    individualIdentificationNumber: string | undefined
    fullName: string | undefined
    phoneNumber: string | undefined
}


export interface IEmployeesFilterOptions {
    individualIdentificationNumber: string[]
    fullName: string[]
    phoneNumber: string[]
}