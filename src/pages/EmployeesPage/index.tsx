import {useState} from "react";

import Container from "@mui/material/Container";
import EmployeesFilter from "@/components/EmployeesFilter";
import EmployeeInfoModal from "@/components/EmployeeInfoModal";
import EmployeesTable from "@/components/EmployeesTable";
import Typography from "@mui/material/Typography";

import {useEmployeesData} from "@/hooks";
import type {IEmployeesFilter, IEmployeesRows} from "@/models";


const EmployeesPage = () => {
    const [filter, setFilter] = useState<IEmployeesFilter>({
        individualIdentificationNumber: undefined,
        fullName: undefined,
        phoneNumber: undefined
    })
    const {rows, filterOptions} = useEmployeesData(filter)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEmployeeData, setModalEmployeeData] = useState<IEmployeesRows | null>(null)

    const handleViewEmployee = (employeeData: IEmployeesRows) => {
        setModalEmployeeData(employeeData)
        setModalOpen(true)
    }

    return (
        <Container>
            <Typography variant='h4' component='h1' sx={{mb: 2}}>Список сотрудников</Typography>
            <EmployeesFilter filterOptions={filterOptions} setFilter={setFilter} filter={filter}/>
            <EmployeesTable rows={rows} handleViewEmployee={handleViewEmployee}/>
            <EmployeeInfoModal modalOpen={modalOpen} setModalOpen={setModalOpen} modalEmployeeData={modalEmployeeData}/>
        </Container>
    );
}

export default EmployeesPage;