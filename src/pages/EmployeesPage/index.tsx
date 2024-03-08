import {useState} from "react";
import {useEmployeesData} from "@/hooks";

import Container from "@mui/material/Container";
import EmployeesFilter from "@/components/EmployeesFilter";
import EmployeeInfoModal from "@/components/EmployeeInfoModal";
import EmployeesTable from "@/components/EmployeesTable";

import type {IFilter, IRows} from "@/models";


const EmployeesPage = () => {
    const [filter, setFilter] = useState<IFilter>({
        individualIdentificationNumber: undefined,
        fullName: undefined,
        phoneNumber: undefined
    })
    const {rows, filterOptions} = useEmployeesData(filter)

    const [modalOpen, setModalOpen] = useState(false);
    const [modalEmployeeData, setModalEmployeeData] = useState<IRows | null>(null)


    const handleViewEmployee = (employeeData: IRows) => {
        setModalEmployeeData(employeeData)
        setModalOpen(true)
    }

    return (
        <Container>
            <EmployeesFilter filterOptions={filterOptions} setFilter={setFilter} filter={filter}/>
            <EmployeesTable rows={rows} handleViewEmployee={handleViewEmployee}/>
            <EmployeeInfoModal modalOpen={modalOpen} setModalOpen={setModalOpen} modalEmployeeData={modalEmployeeData}/>
        </Container>
    );
}

export default EmployeesPage;