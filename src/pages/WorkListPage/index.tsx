import {useState} from "react";
import {useWorkListData} from "@/hooks/useWorkListData.ts";

import Container from "@mui/material/Container";
import WorkListTable from "@/components/WorkListTable";
import WorkListFilter from "@/components/WorkListFilter";
import Button from "@mui/material/Button";
import WorkAddModal from "@/components/WorkAddModal";
import Box from "@mui/material/Box";

import {IWorkListFilter} from "@/models";

const WorkListPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState<IWorkListFilter>({
        dateFrom: null,
        dateTo: null,
        employeeFullName: null
    })
    const {rows, fullNameOptions} = useWorkListData(filter, isModalOpen);

    return (
        <Container>
            <Box
                sx={{display: {xs: 'block', md: 'flex'}, mb: 2, justifyContent: 'space-between'}}>
                <WorkListFilter filter={filter} setFilter={setFilter} fullNameOptions={fullNameOptions}/>
                <Button
                    sx={{
                        height: '53px',
                        whiteSpace: 'nowrap',
                        px: 4,
                        width: {xs: '100%', md: 'auto'},
                        mt: {xs: 2, md: 0}
                    }}
                    onClick={() => setIsModalOpen(true)}
                    variant='contained'
                >
                    Добавить работу
                </Button>
            </Box>
            <WorkListTable rows={rows}/>
            <WorkAddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </Container>
    );
}

export default WorkListPage;