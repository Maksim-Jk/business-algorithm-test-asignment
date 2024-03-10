import {createContext, useState, ReactNode, FC, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import type {IAuthContext, IAuthUser} from "@/models";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [authUser, setAuthUser] = useState<IAuthUser | null>(null);
    const {pathname} = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        const authUser = localStorage.getItem('authUser');
        if (authUser) {
            setAuthUser(JSON.parse(authUser));
            navigate(pathname, {replace: true});
        }
    }, [])

    useEffect(() => {
        if (authUser) {
            localStorage.setItem('authUser', JSON.stringify(authUser));
        }
    }, [authUser])

    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
};

