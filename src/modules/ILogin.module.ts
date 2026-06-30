export interface ILogin {
    userName: string
    address: string
    postaCode:string 
    password: string
    email: string
}

export interface ILoginContext {
    userInfo: ILogin;
    setUserInfo: React.Dispatch<React.SetStateAction<ILogin>>;
    token: ILogin;
    handleLogin: (e: React.FormEvent) => void;
    setToken:React.Dispatch<React.SetStateAction<ILogin>>
    isAuthountication:() => boolean;
    displayUserName:() => string
    exitLoginToken: () => void
    step: number
    nextStep: () => void
    previousStep: () => void
}

