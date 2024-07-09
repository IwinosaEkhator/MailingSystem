import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import AdminHome from "../admin-home";
import AdminLogin from "../admin-login";

const Admin = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<AdminHome />} />
                <Route path="/login-page" element={<AdminLogin />} />
            </Routes>
        </Router>
    );
}

export default Admin;