import React, { useState } from "react";
import classNames from 'classnames';

import Navbar from "./Components/navbar.jsx";
import "../Admin/admin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Components/sidebar.jsx";
import Dashboard from "../Admin/Components/Pages/dashboard.jsx";

import { Routes, Route } from "react-router-dom";
import Pending from "./Components/Pages/Requests/pending.jsx";
import Requests from "./Components/Pages/Requests/requests.jsx";
import Approved from "./Components/Pages/Requests/approved.jsx";
import Declined from "./Components/Pages/Requests/declined.jsx";
import AdminForm from "./Components/Pages/Requests.form/admin-form.jsx";
import Inbound from "./Components/Pages/Inventory/inbound.jsx";
import Inventory from "./Components/Pages/Inventory/inventory.jsx";
import Outbound from "./Components/Pages/Inventory/outbound.jsx";
import ScanItems from "./Components/Pages/Inventory/scan-items.jsx";
import Categories from "./Components/Pages/Inventory/categories.jsx";
import Report from "./Components/Pages/Reports/report.jsx";

const AdminHome = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={classNames('body', { 'dark': isDarkMode })}>
            <div className={classNames('main')}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/requests" element={<Requests />} />
                    <Route path="/pending" element={<Pending />} />
                    <Route path="/approved" element={<Approved />} />
                    <Route path="/declined" element={<Declined />} />

                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/inbound" element={<Inbound />} />
                    <Route path="/outbound" element={<Outbound />} />
                    <Route path="/scan-items" element={<ScanItems />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/receipts" element={<Declined />} />
                    <Route path="/add-form" element={<AdminForm />} />
                </Routes>
            </div>
            <nav className={classNames('sidebar')}>
                <Sidebar isDarkMode={isDarkMode} toggleMode={toggleMode} />
            </nav>
        </div>
    );
};

export default AdminHome;   