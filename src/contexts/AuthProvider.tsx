import {createContext, useState, ReactNode, FC, SetStateAction, Dispatch, useContext, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

interface IAuthContext {
    authUser: {
        login: string;
        password: string;
    } | null;
    setAuthUser: Dispatch<SetStateAction<IAuthContext['authUser']>>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [authUser, setAuthUser] = useState<IAuthContext['authUser']>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const authUser = localStorage.getItem('authUser');
        if (authUser) {
            setAuthUser(JSON.parse(authUser));
            navigate('/employees')
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

export const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
