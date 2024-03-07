import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import {BrowserRouter} from "react-router-dom";
import './styles/reset.css'
import {createTheme, ThemeProvider} from "@mui/material";
import {ruRU} from "@mui/material/locale";

const theme = createTheme(
    {
        palette: {
            primary: {main: '#1976d2'},
        },
    },
    ruRU,
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
