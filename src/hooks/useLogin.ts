import { useContext } from "react"
import { loginContext } from "../context/loginContext";
import type { ILoginContext } from "../modules/ILogin.module";

export const useLogin = ():ILoginContext => {
    const LoginContext = useContext(loginContext);
    if (!LoginContext) {
        throw new Error("contextLoginError");
    }
    return LoginContext;
}