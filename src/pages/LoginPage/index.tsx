import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {useAuth} from "@/hooks";

const LoginPage = () => {
    const {setAuthUser} = useAuth();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({login: '', password: ''});
    const [errors, setErrors] = useState({login: false, password: false});

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, login: e.target.value});
        setErrors({...errors, login: false});
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, password: e.target.value});
        setErrors({...errors, password: false});
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!userData.login.length) {
            setErrors(prevErrors => ({...prevErrors, login: true}));
        }

        if (!userData.password.length) {
            setErrors(prevErrors => ({...prevErrors, password: true}));
        }

        if (userData.login && userData.password) {
            setAuthUser({login: userData.login, password: userData.password});
            navigate('/employees');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизация
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="login"
                        label="Логин"
                        name="login"
                        autoComplete="username"
                        autoFocus
                        value={userData.login}
                        onChange={handleLoginChange}
                        error={errors.login}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={userData.password}
                        onChange={handlePasswordChange}
                        error={errors.password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, py: 1}}
                    >
                        Войти
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default LoginPage;
