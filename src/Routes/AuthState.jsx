import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AuthState = () => {
    return !localStorage.getItem("user") ? <Outlet /> : <Navigate to={"/Dashboard"} />;  
}

export default AuthState
