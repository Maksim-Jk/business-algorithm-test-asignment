import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/hooks";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const LoginPage = () => {
    const {setAuthUser} = useAuth();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({login: 'init', password: 'init'})
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userData.login.length &&
            userData.password.length &&
            userData.login !== 'init' &&
            userData.password !== 'init') {
            setAuthUser({login: userData.login, password: userData.password})
            navigate('/employees')
        } else {
            setUserData({login: '', password: ''})
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
                        autoFocus
                        error={!userData.login.length}
                        onChange={(e) => setUserData({login: e.target.value, password: userData.password})}
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
                        error={!userData.password.length}
                        onChange={(e) => setUserData({login: userData.login, password: e.target.value})}
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
    )
}

export default LoginPage;