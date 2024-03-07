import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ChangeEvent, useState} from "react";
import {TablePagination} from "@mui/material";
import {useEmployeesData} from "@/hooks/useFetchEmployees.ts";
import EmployeesFilter from "@/components/EmployeesFilter";
import {IFilter, IRows} from "@/models/employeesData.type.ts";
import {columns} from "@/pages/EmployeesPage/lib/employeesTable.data.ts";

import Button from "@mui/material/Button";
import EmployeeInfoModal from "@/components/EmployeeInfoModal";


const EmployeesPage = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filter, setFilter] = useState<IFilter>({
        individualIdentificationNumber: undefined,
        fullName: undefined,
        phoneNumber: undefined
    })
    const {rows, filterOptions} = useEmployeesData(filter)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEmployeeData, setModalEmployeeData] = useState<IRows | null>(null)


    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleViewEmployee = (employeeData: IRows) => {
        setModalEmployeeData(employeeData)
        setModalOpen(true)
    }

    return (
        <Container>
            <EmployeesFilter filterOptions={filterOptions} setFilter={setFilter} filter={filter}/>
            <Paper sx={{width: '100%', overflow: 'hidden'}}>
                <TableContainer component={Paper} sx={{maxHeight: '70vh'}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.fullName}>
                                            {columns.map((column) => {
                                                if (column.id === 'controls') return null
                                                const value = row[column.id as keyof typeof row];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell key='controls'>
                                                <Button onClick={() => handleViewEmployee(row)}>Открыть</Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <EmployeeInfoModal modalOpen={modalOpen} setModalOpen={setModalOpen} modalEmployeeData={modalEmployeeData}/>
        </Container>
    );
}

export default EmployeesPage;