import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import LoginProvider from "./context/loginContext";
import ThemeProvider from './context/themeContext';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
    <LoginProvider>
    <App />
  </LoginProvider>
  </ThemeProvider>
)
