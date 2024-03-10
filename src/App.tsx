import {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {AuthProvider} from "@/contexts/AuthProvider.tsx";

import ProtectedLayout from "@/layouts/ProtectedLayout.tsx";
import HomeLayout from "@/layouts/HomeLayout.tsx";

import LoginPage from '@/pages/LoginPage';
import EmployeesPage from '@/pages/EmployeesPage';
import CalendarPage from '@/pages/CalendarPage';
import WorkListPage from '@/pages/WorkListPage';

const App: FC = () => {
    return (
        <>
            <AuthProvider>
                <Routes>pn
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route element={<HomeLayout/>}>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Route>
                    <Route element={<ProtectedLayout/>}>
                        <Route path="/employees" element={<EmployeesPage/>}/>
                        <Route path="/calendar" element={<CalendarPage/>}/>
                        <Route path="/work-list" element={<WorkListPage/>}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </>
    )
}


export default App
