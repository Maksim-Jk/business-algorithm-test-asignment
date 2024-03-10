import {IEmployeesRows} from "@/models";


export const getDayBirthEvents = (employees: IEmployeesRows[]) => {
    return employees.map(employee => {
        const employeeTransformedDate = updateBirthdateYear(employee.birthDate)
        return {
            title: employee.fullName,
            date: employeeTransformedDate,
            rrule: {
                freq: 'yearly',
                interval: 1,
                dtstart: employeeTransformedDate,
            }
        }
    })
}

function updateBirthdateYear(birthdate: string) {
    const parts = birthdate.split('.');
    return parts[2] + '-' + parts[1] + '-' + parts[0];
}
