import {Dispatch, SetStateAction} from "react";

export interface IAuthUser {
    login: string;
    password: string;
}

export interface IAuthContext {
    authUser: IAuthUser | null;
    setAuthUser: Dispatch<SetStateAction<IAuthUser | null>>;
}
