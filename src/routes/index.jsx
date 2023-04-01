import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import ErrorPage from '../components/common_components/ErrorPage';
import DashboardHome from '../components/Dashboard/DashboardHome';
const SignUp = lazy(() => import('../components/authentication/signup'));
const Login = lazy(() => import('../components/authentication/login'));

const Router = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Suspense>
    );
};

export default Router;