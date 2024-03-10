import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import App from '@/App.tsx'

import {createTheme, ThemeProvider} from "@mui/material";
import {ruRU} from "@mui/material/locale";

import './styles/reset.css'
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

import './styles/index.css'

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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </LocalizationProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
