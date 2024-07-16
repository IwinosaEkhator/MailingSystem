import React, { useState } from "react";
import classNames from 'classnames';

import Navbar from "./navbar.js";
import "../Components/Admin/admin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./sidebar.jsx";
import Dashboard from "./dashboard.js";

import { Routes, Route } from "react-router-dom";
import Pending from "../Components/Requests/pending.js";
import Requests from "../Components/Requests/requests.js";
import Approved from "../Components/Requests/approved.js";
import Declined from "../Components/Requests/declined.js";
import AdminForm from "./Requests.form/admin-form.js";
import Inbound from "./Inventory/inbound.js";
import Inventory from "./Inventory/inventory.js";
import Outbound from "./Inventory/outbound.js";
import ScanItems from "./Inventory/scan-items.js";
import Categories from "./Inventory/categories.js";

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
                    <Route path="/delivery-report" element={<Declined />} />
                    <Route path="/growth" element={<Declined />} />
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