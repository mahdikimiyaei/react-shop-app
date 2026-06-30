import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import "../Styles/loginForm.css";

export default function LoginForm() {
    const { setUserInfo, userInfo, handleLogin, isAuthountication, step, nextStep, previousStep } = useLogin();
    const navigate = useNavigate();

    const handleFinishLogin = (e: React.FormEvent) => {
        handleLogin(e);
        navigate("/");
    };

    return (
        <div className="login-page">
            <Form
                onSubmit={(e) => handleFinishLogin(e)}
                className="login-card"
            >
                <h2 className="login-title">
                    ورود به حساب کاربری
                </h2>
                {step === 1 && (
                    <>
                        <Form.Label htmlFor="username">
                            نام کاربری
                        </Form.Label>

                        <Form.Control
                            className="login-input"
                            type="text"
                            id="username"
                            value={userInfo.userName}
                            onChange={(e) =>
                                setUserInfo({
                                    ...userInfo,
                                    userName: e.target.value,
                                })
                            }
                        />
                        
                        <Button
                            className="login-btn"
                            onClick={nextStep}
                            disabled={isAuthountication()}
                            variant="contained"
                        >
                            بعدی
                        </Button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <label htmlFor="address">
                            آدرس منزل شما
                        </label>

                        <Form.Control
                            className="login-input"
                            id="address"
                            type="text"
                            value={userInfo.address}
                            onChange={(e) =>
                                setUserInfo({
                                    ...userInfo,
                                    address: e.target.value,
                                })
                            }
                        />
                       <div className="mt-2 flex justify-between">
                        <Button
                            
                            onClick={previousStep}
                            variant="contained"
                        >
                            قبلی
                        </Button>
                        <Button
                            onClick={nextStep}
                            variant="contained"
                        >
                            بعدی
                        </Button>
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <Form.Label htmlFor="postaCode">
                            کد پستی
                        </Form.Label>

                        <Form.Control
                            className="login-input"
                            type="text"
                            id="postaCode"
                            value={userInfo.postaCode}
                            onChange={(e) => setUserInfo({ ...userInfo, postaCode: e.target.value })}
                        />
                        <div className="mt-2 flex justify-between">
                        <Button
                            
                            onClick={previousStep}
                            variant="contained"
                        >
                            قبلی
                        </Button>
                        <Button
                            onClick={nextStep}
                            variant="contained"
                        >
                            بعدی
                        </Button>
                        </div>
                    </>
                )}


                {step === 4 && (
                    <>
                        <Form.Label htmlFor="email">
                            ایمیل
                        </Form.Label>

                        <Form.Control
                            className="login-input"
                            type="email"
                            id="email"
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        />
                        <div className="mt-2 flex justify-between">
                        <Button
                            
                            onClick={previousStep}
                            variant="contained"
                        >
                            قبلی
                        </Button>
                        <Button
                            onClick={nextStep}
                            variant="contained"
                        >
                            بعدی
                        </Button>
                        </div>
                    </>
                )}

                {step === 5 && (
                    <>
                        <Form.Label htmlFor="password" className="mt-3">
                            پسورد
                        </Form.Label>

                        <Form.Control
                            className="login-input"
                            type="password"
                            id="password"
                            value={userInfo.password}
                            onChange={(e) =>
                                setUserInfo({
                                    ...userInfo,
                                    password: e.target.value,
                                })
                            }
                        />
                        <div className="mt-2 flex justify-between">
                        <Button
                            onClick={previousStep}
                            variant="contained"
                        >
                            قبلی
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            ثبت نهایی
                        </Button>
                        </div>
                    </>
                )}
                
            </Form>
        </div>
    );
}