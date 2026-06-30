import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLogin } from "../hooks/useLogin";
import { Button } from "react-bootstrap";
import { Tooltip } from "@mui/material";
import { useOrders } from "../hooks/useOrders";
import { Button as ButtonMui } from "@mui/material";
import {useTheme} from "../hooks/useTheme"
import "../Styles/header.css";
import { Sun, Moon } from "lucide-react";

function Header() {
  const { isAuthountication, displayUserName, exitLoginToken } = useLogin();
  const { setOrders, setFormOrder, orders, formOrder } = useOrders();

  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    exitLoginToken();

    if (orders.length > 0 && formOrder) {
      setOrders([]);
      setFormOrder({
        address: "",
        deliveryDay: "",
        deliveryTime: "",
        email: "",
        postaCode: "",
      });
    }

    setShowMenu(false);
  };

  const {theme, toggleTheme} = useTheme();

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="shadow-lg border-bottom border-secondary py-3"
      >
        <Container>
          <Navbar.Brand className="fw-bold fs-4 text-info">
            🛍️ فروشگاه
          </Navbar.Brand>

          <Nav className="me-auto d-flex align-items-center gap-3">


            <NavLink to="/">
              {({ isActive }) => (
                <ButtonMui
                  variant="contained"
                  className={isActive ? "activeBtn" : 'inactiveBtn'}
                  sx={{fontSize: "15px", fontFamily: "sans-serif"}}
                >
                  صفحه اصلی
                </ButtonMui>
              )}
            </NavLink>

            <NavLink to="/orders" >
              {({ isActive }) => (
                <ButtonMui variant="contained" className={isActive ? "activeBtn" : 'inactiveBtn'} sx={{fontSize: "15px", fontFamily: "sans-serif"}}>
                  سفارشات
                </ButtonMui>
              )}
            </NavLink>

            {/* فقط دسکتاپ */}
            <div className="hidden min-[770px]:flex gap-3">

              <NavLink to="/dashboard" >
                {({ isActive }) => (
                  <ButtonMui variant="contained" className={isActive ? "activeBtn" : 'inactiveBtn'} sx={{fontSize: "15px", fontFamily: "sans-serif"}}>
                    داشبورد
                  </ButtonMui>
                )}

              </NavLink>

              <NavLink to="/addProduct" >
                {({ isActive }) => (
                  <ButtonMui variant="contained" className={isActive ? "activeBtn" : 'inactiveBtn'} sx={{fontSize: "15px", fontFamily: "sans-serif"}}>
                    اضافه کردن محصول
                  </ButtonMui>
                )}
              </NavLink>
                
            </div>
                {theme === "light" ? (
             
                  <Sun onClick={toggleTheme} size={25} color="yellow" className="cursor-pointer"/>
                ) : 
                  <Moon onClick={toggleTheme} size={25} color="gray" className="cursor-pointer"/>
                }
                
          </Nav>

          {isAuthountication() && (
            <>
              {/* دسکتاپ */}
              <div className="hidden min-[990px]:flex align-items-center gap-3">

                <Tooltip
                  title="خروج (در صورت پاک شدن اطلاعات)"
                  slotProps={{
                    tooltip: {
                      sx: {
                        fontSize: 15,
                        fontWeight: 600,
                      },
                    },
                  }}
                >
                  <Button
                    variant="outline-info"
                    onClick={handleLogout}
                  >
                    خروج
                  </Button>
                </Tooltip>

                <div
                  className="text-white px-3 py-2 rounded-pill"
                  style={{
                    background: "#2d3748",
                  }}
                >
                  👋 {displayUserName()}
                </div>

              </div>

              {/* موبایل */}
              <div className="min-[990px]:hidden">

                <button
                  onClick={() => setShowMenu(true)}
                  className="border-0 bg-transparent text-white transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

              </div>
            </>
          )}
        </Container>
      </Navbar>

      {/* Backdrop */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setShowMenu(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72
         from-gray-900 to-gray-800
        text-white shadow-2xl
        z-50
        transition-all duration-300 ease-in-out
        ${showMenu
            ? "translate-x-0"
            : "translate-x-full"
          }`}
      >
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">

          <h5 className="m-0 fw-bold text-info">
            پنل کاربری
          </h5>

          <button
            onClick={() => setShowMenu(false)}
            className="bg-transparent border-0 text-white fs-2"
          >
            ×
          </button>

        </div>

        <div className="p-4 d-flex flex-column gap-3">

          <div
            className="rounded p-3 text-center"
            style={{ background: "#374151" }}
          >
            👋 خوش آمدید
            <br />
            <strong>{displayUserName()}</strong>
          </div>

          <NavLink
            to="/dashboard"
            onClick={() => setShowMenu(false)}
            className="text-decoration-none text-white p-2 rounded transition hover:bg-secondary"
          >
            📊 داشبورد
          </NavLink>

          <NavLink
            to="/addProduct"
            onClick={() => setShowMenu(false)}
            className="text-decoration-none text-white p-2 rounded transition hover:bg-secondary"
          >
            ➕ اضافه کردن محصول
          </NavLink>

          <hr />

          <Button
            variant="danger"
            onClick={handleLogout}
          >
            خروج
          </Button>

        </div>
      </div>
    </>
  );
}

export default Header;