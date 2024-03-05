import {useAuth} from "@/contexts/AuthProvider.tsx";
import {useNavigate} from "react-router-dom";

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
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default LoginPage;