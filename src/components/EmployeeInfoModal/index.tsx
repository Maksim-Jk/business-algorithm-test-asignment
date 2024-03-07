import {IRows} from "@/models/employeesData.type.ts";
import {FC} from "react";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface IEmployeeInfoModal {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
    modalEmployeeData: IRows | null
}

const EmployeeInfoModal: FC<IEmployeeInfoModal> = ({modalOpen, setModalOpen, modalEmployeeData}) => {
    const handleClose = () => setModalOpen(false);

    return (
        <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {modalEmployeeData === null ? (<>Cant load data</>) : (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: 2,
                        p: 4,
                    }}
                >
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