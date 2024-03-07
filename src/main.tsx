import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import App from '@/App.tsx'

import {createTheme, ThemeProvider} from "@mui/material";
import {ruRU} from "@mui/material/locale";


import './styles/reset.css'

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
