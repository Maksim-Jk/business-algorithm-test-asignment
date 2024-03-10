import {FC} from "react";

import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import type {IEmployeesRows} from "@/models";
import {modalStyles} from "@/styles/modal.styles.ts";

interface Props {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
    modalEmployeeData: IEmployeesRows | null
}

const EmployeeInfoModal: FC<Props> = ({modalOpen, setModalOpen, modalEmployeeData}) => {
    const handleClose = () => setModalOpen(false);

    return (
        <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {modalEmployeeData === null
                ? (<Box sx={modalStyles}>Не удалось получить данные</Box>)
                : (
                    <Box sx={modalStyles}>
                        <Button variant='text' onClick={handleClose}
                                disableRipple
                                sx={{
                                    padding: 0,
                                    position: 'absolute',
                                    top: '26px',
                                    right: '26px',
                                    width: '38px',
                                    height: '38px',
                                    minWidth: 'auto'
                                }}>
                            X
                        </Button>
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

                    </Box>
                )}
        </Modal>
    );
}

export default EmployeeInfoModal