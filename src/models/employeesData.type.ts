export interface IColumn {
    id: string;
    label: string;
    minWidth: number;
    align?: 'left' | 'center' | 'right';
    format?: (value: number | string) => string;
}

export interface IData {
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

export interface IRows {
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


export interface IFilterOptions {
    individualIdentificationNumber: string[]
    fullName: string[]
    phoneNumber: string[]
}