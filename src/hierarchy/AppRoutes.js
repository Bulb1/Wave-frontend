import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from "../pages/Login";

function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                {/* Add more routes as needed */}
            </Routes>
    );
}

export default AppRoutes;
