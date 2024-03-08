import {FC} from "react";

import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import type {IEmployeesRows} from "@/models";

interface Props {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
    modalEmployeeData: IEmployeesRows | null
}

const EmployeeInfoModal: FC<Props> = ({modalOpen, setModalOpen, modalEmployeeData}) => {
    const handleClose = () => setModalOpen(false);
    const styles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
    }

    return (
        <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {modalEmployeeData === null
                ? (<Box sx={styles}>Не удалось получить данные</Box>)
                : (
                    <Box sx={styles}>
                        <Typography variant="h5" gutterBottom>
                            {modalEmployeeData.fullName}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            ИИН: {modalEmployeeData.individualIdentificationNumber}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Телефон: {modalEmployeeData.phoneNumber}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Почта: {modalEmployeeData.email}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Адрес: {modalEmployeeData.address}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            День рождения: {modalEmployeeData.birthDate}
                        </Typography>
                        <Button onClick={handleClose} variant="contained" sx={{mt: 2}}>
                            Закрыть
                        </Button>
                    </Box>
                )}
        </Modal>
    );
}

export default EmployeeInfoModal