import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ILogin, ILoginContext } from "../modules/ILogin.module";
import { toast } from "react-toastify";

export const loginContext = createContext<ILoginContext | null>(null);

export default function LoginProvider({ children }: { children: ReactNode }) {
    const [step, setStep] = useState<number>(1);
    const [userInfo, setUserInfo] = useState<ILogin>({ userName: "", password: "", address: "", postaCode: "", email: "" })
    const [token, setToken] = useState<ILogin>(() => {
        const savedUserInfo = localStorage.getItem("userInfo");
        if (savedUserInfo) {
            return JSON.parse(savedUserInfo);
        }
        else {
            return { userName: "", password: "", address: "", postaCode: "", email: "" }
        }
    });

    const nextStep = () => {
        let isValid = false;

        if (step === 1) {
            if (userInfo.userName.trim()) {
                isValid = true;
            }
            else {
                isValid = false;
                toast.error("وارد کردن نام کاربری الزامی است")
            }
        }

        if (step === 2) {
            if (userInfo.address.trim()) {
                isValid = true;
            }
            else {
                isValid = false;
                toast.error("وارد کردن آدرس شما الزامی است")
            }
        }

        if (step === 3) {
            if (userInfo.postaCode.trim()) {
                isValid = true;
            }
            else {
                isValid = false;
                toast.error("وارد کردن کد پستی الزامی است")
            }
        }

        if (step === 4) {
            if (userInfo.email.trim()) {
                isValid = true;
            }
            else {
                isValid = false;
                toast.error("وارد کردن ایمیل الزامی است")
            }
        }

        if (isValid) {
            setStep((prev) => prev + 1)
        }
    }

    const previousStep = () => {
        setStep((prev) => prev - 1)
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (userInfo.password.trim()) {
            const newEntry = {
                userName: userInfo.userName,
                password: userInfo.password,
                postaCode: userInfo.postaCode,
                email: userInfo.email,
                address: userInfo.address
            }
            setToken(newEntry);
            localStorage.setItem("userInfo", JSON.stringify(newEntry))
            toast.success("با موفقیت وارد شدید");
        }
        else {
            toast.error("وارد کردن پسورد الزامی است");
            return;
        }
    }


    const isAuthountication = () => !!token.userName;

    const displayUserName = () => {
        if (isAuthountication()) {
            return `${token.userName}`;
        }
        else return "";
    }

    const exitLoginToken = () => {
        setToken({ userName: "", password: "", address: "", email: "", postaCode: "" });
        localStorage.removeItem("userInfo");
        localStorage.removeItem("order");
    }

    useEffect(() => {
        if (!isAuthountication()) {
            toast.error("ابتدا باید وارد شوید");
        }
    }, [])

    const contextValue: ILoginContext = {
        userInfo,
        setUserInfo,
        token,
        handleLogin,
        setToken,
        isAuthountication,
        displayUserName,
        exitLoginToken,
        step,
        nextStep,
        previousStep
    }

    return (
        <loginContext.Provider value={contextValue}>
            {children}
        </loginContext.Provider>
    )
}