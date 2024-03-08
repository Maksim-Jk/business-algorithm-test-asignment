import {useWorkListData} from "@/hooks/useWorkListData.ts";

import Container from "@mui/material/Container";
import WorkListTable from "@/components/WorkListTable";
import {useState} from "react";
import WorkListFilter from "@/components/WorkListFilter";
import {IWorkListFilter} from "@/models";

const WorkListPage = () => {
    // const [filter, setFilter] = useState<IWorkListFilter>({
    //     employeeFullName: undefined,
    //     startDate: undefined,
    //     endDate: undefined
    // })
    const {rows, fullNameOptions} = useWorkListData()
    // const [modalOpen, setModalOpen] = useState(false);
    // const [modalEmployeeData, setModalEmployeeData] = useState<IWorkListRows | null>(null)


    // const handleViewEmployee = (employeeData: IWorkListRows) => {
    //     setModalEmployeeData(employeeData)
    //     setModalOpen(true)
    // }

    const [filter, setFilter] = useState<IWorkListFilter>({
        dateFrom: null,
        dateTo: null,
        fullName: null
    })

    return (
        <Container>
            <WorkListFilter filter={filter} setFilter={setFilter} fullNameOptions={fullNameOptions}/>
            <WorkListTable rows={rows}/>
            {/*<EmployeeInfoModal modalOpen={modalOpen} setModalOpen={setModalOpen} modalEmployeeData={modalEmployeeData}/>*/}
        </Container>
    );
}

export default WorkListPage;