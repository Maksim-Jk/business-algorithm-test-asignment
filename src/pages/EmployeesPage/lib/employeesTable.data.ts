import {IColumn} from "@/models/employeesData.type.ts";

export const columns: IColumn[] = [
    {id: 'id', label: 'ID', minWidth: 70},
    {id: 'fullName', label: 'Полное имя', minWidth: 70},
    {id: 'gender', label: 'Пол', minWidth: 70},
    {id: 'birthDate', label: 'Дата рождения', minWidth: 70},
    {id: 'phoneNumber', label: 'Телефон', minWidth: 130},
    {id: 'address', label: 'Адрес', minWidth: 70},
    {id: 'email', label: 'Email', minWidth: 70},
    {id: 'individualIdentificationNumber', label: 'ИИН', minWidth: 70}
];

export const filtersNameLibrary = {
    individualIdentificationNumber: 'ИИН',
    fullName: 'ФИО',
    phoneNumber: 'Номер телефона'
}