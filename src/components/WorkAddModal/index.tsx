import {ChangeEvent, FC, useEffect, useState} from "react";

import {Modal, SxProps, Theme} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import {getFormattedDate} from "@/helpers";
import type {IAuthUser, IWorkData} from "@/models";

interface Props {
    isModalOpen: boolean
    setIsModalOpen: (value: boolean) => void
}

const WorkAddModal: FC<Props> = ({isModalOpen, setIsModalOpen}) => {
    const [workData, setWorkData] = useState<IWorkData | null>(null);
    const [existingData, setExistingData] = useState<IWorkData[]>([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            const existingData = JSON.parse(localStorage.getItem('workListData')!);
            const authUser: IAuthUser = JSON.parse(localStorage.getItem('authUser')!);
            setExistingData(existingData);
            const newData = {
                name: '',
                employeeFullName: authUser.login || 'Неизвестно',
                date: getFormattedDate(),
                id: existingData.length + 1
            }
            setWorkData(newData)
        }
    }, [isModalOpen]);

    const handleClose = () => setIsModalOpen(false);

    const handleSubmit = () => {
        if (!workData?.name?.length) {
            setIsError(true);
            return
        }
        const updatedData = [...existingData, workData];
        localStorage.setItem('workListData', JSON.stringify(updatedData));
        setIsModalOpen(false);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setWorkData({...workData, name: e.target.value})
        setIsError(false)
    }

    const styles: SxProps<Theme> = {
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
            open={isModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styles}>
                <Typography variant="h5" gutterBottom>
                    Добавить работу
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Сотрудник: {workData?.employeeFullName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Опишите выполненную работу:
                </Typography>
                <TextField
                    required
                    fullWidth
                    multiline
                    name="workText"
                    type="text"
                    id="workText"
                    placeholder='Опишите выполненную работу'
                    onChange={(e) => handleChange(e)}
                    error={isError}
                />
                <Typography variant="body1" gutterBottom sx={{mt: 2}}>
                    Дата выполнения: {workData?.date}
                </Typography>
                <Button onClick={handleSubmit} variant="contained" sx={{mt: 2, width: '100%', p: 1}}>
                    Добавить
                </Button>
            </Box>
        </Modal>
    );
}

export default WorkAddModal