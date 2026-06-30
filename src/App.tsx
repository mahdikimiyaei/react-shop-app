import Header from "./Components/Header";
import ProductsProvider from "./context/productsContext";
import Details from "./pages/Details";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import OrdersProvider from "./context/ordersContext";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { useLogin } from "./hooks/useLogin";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProducts from "./pages/AddProducts";
import { useTheme } from "./hooks/useTheme";
import "./Styles/theme.css";
import Footer from "./Components/Footer";

export default function App() {
    const { isAuthountication } = useLogin();
    const { theme } = useTheme();

    return (
        <>
            <ToastContainer />
            <div className={`${theme}-theme bg-gray-100 min-h-screen`}>
                <ProductsProvider>
                    <OrdersProvider>
                        <Router>
                            {isAuthountication() && <Header />}
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                {isAuthountication() ? (
                                    <>
                                        <Route path="/" element={<HomePage />} />
                                        <Route path="/details/:id" element={<Details />} />
                                        <Route path="/orders" element={<Orders />} />
                                        <Route path="/dashboard" element={<Dashboard />} />
                                        <Route path="/addProduct" element={<AddProducts />} />
                                    </>
                                ) : (
                                    <Route path="*" element={<Navigate replace to="/login" />} />
                                )}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                            <Footer />
                        </Router>
                    </OrdersProvider>
                </ProductsProvider>
            </div>
        </>
    )
}