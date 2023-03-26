import React from 'react';
import { Routes, Route } from "react-router-dom"
import Login from '../components/authentication/login';
import SignUp from '../components/authentication/signup';
import ErrorPage from '../components/common_components/ErrorPage';
import DashboardHome from '../components/Dashboard/DashboardHome';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
};

export default Router;