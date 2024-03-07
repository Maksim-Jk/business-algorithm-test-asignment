import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "@/hooks";

import Header from "@/components/Header";

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