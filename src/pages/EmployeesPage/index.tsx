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
import {IFilter, useEmployeesData} from "@/hooks/useFetchEmployees.ts";
import EmployeesFilter from "@/components/EmployeesFilter";


interface IColumn {
    id: string;
    label: string;
    minWidth: number;
    align?: 'left' | 'center' | 'right';
    format?: (value: number | string) => string;
}

const columns: IColumn[] = [
    {id: 'id', label: 'ID', minWidth: 70},
    {id: 'fullName', label: 'Полное имя', minWidth: 70},
    {id: 'gender', label: 'Пол', minWidth: 70},
    {id: 'birthDate', label: 'Дата рождения', minWidth: 70},
    {id: 'phoneNumber', label: 'Телефон', minWidth: 130},
    {id: 'address', label: 'Адрес', minWidth: 70},
    {id: 'email', label: 'Email', minWidth: 70},
    {id: 'individualIdentificationNumber', label: 'ИИН', minWidth: 70}
];

const EmployeesPage = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filter, setFilter] = useState<IFilter>({
        individualIdentificationNumber: undefined,
        fullName: undefined,
        phoneNumber: undefined
    })

    const {rows, filterOptions} = useEmployeesData(filter)


    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Container>
            <EmployeesFilter filterOptions={filterOptions} setFilter={setFilter}/>
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
                                                const value = row[column.id as keyof typeof row];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
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
        </Container>
    );
}

export default EmployeesPage;