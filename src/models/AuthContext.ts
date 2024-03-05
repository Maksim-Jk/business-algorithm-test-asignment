import {Dispatch, SetStateAction} from "react";

export interface IAuthContext {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;
}