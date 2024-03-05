import {useAuth} from "@/contexts/AuthProvider.tsx";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const LoginPage = () => {
    const {setIsAuth} = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        setIsAuth(true)
        navigate('/employees')
    }

    return (
        <>
            <div>LoginPage</div>
            <Button onClick={handleLogin} variant='contained'>Login</Button>
        </>
    )
}

export default LoginPage;