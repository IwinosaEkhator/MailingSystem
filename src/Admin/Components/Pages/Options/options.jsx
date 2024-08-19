import React from "react";

import { Routes, Route,  NavLink } from "react-router-dom";
import AdminRight from "./admin-right";
import GeneralOptions from "./general";
import Notification from "./notification";

function Options() {
  return (
    <>
      <div className="options">
        <div className="mini-navbar border-bottom py-3 px-5">
          <NavLink to="/options" className={({ isActive }) => ` ${isActive ? 'me-4 active' : 'me-4'}`}>
            General
          </NavLink>
          <NavLink to="/options/admin-right" className="me-4">
            Admin Right
          </NavLink>
          <NavLink to="/options/notification" className="me-4">
            Notification
          </NavLink>
        </div>
        <div className="option-inside">
          <Routes>
            <Route path="/" element={<GeneralOptions />} />
            <Route path="admin-right" element={<AdminRight />} />
            <Route path="notification" element={<Notification />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Options;
