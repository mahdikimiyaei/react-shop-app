import LoginForm from "../Components/LoginForm"
import { Alert } from "@mui/material";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { isAuthountication } = useLogin()

  return (
    <>
      {!isAuthountication() && (<Alert variant="filled" severity="info">
        برای دسترسی به امکانات سایت ابتدا وارد شوید
      </Alert>)}

      <LoginForm />
    </>
  )
}

export default Login
