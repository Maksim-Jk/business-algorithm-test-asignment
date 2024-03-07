import {Navigate, Outlet} from "react-router-dom";
import Header from "@/components/Header";
import {useAuth} from "@/contexts/AuthProvider.tsx";

const ProtectedLayout = () => {
    const {authUser} = useAuth();

    if (!authUser?.login) {
        return <Navigate to="/"/>;
    }

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
};

export default ProtectedLayout