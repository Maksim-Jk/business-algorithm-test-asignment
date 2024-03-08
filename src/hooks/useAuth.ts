import {useContext} from "react";
import {AuthContext} from "@/contexts/AuthProvider.tsx";

import type {IAuthContext} from "@/models";

export const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
