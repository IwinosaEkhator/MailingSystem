import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./Components/Login/Login-page/login";
import SignupPage from "./Components/Login/Signup-page/signup";
import Admin from "./Components/Admin/admin";
import AdminLogin from "./Components/admin-login";
import User from "./Components/User/User"
import AdminHome from "./Components/admin-home";

const MailingSystem = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<AdminHome />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/user/*" element={<User />} />
        </Routes>
      </Router>
    </>
  );
};

export default MailingSystem;
