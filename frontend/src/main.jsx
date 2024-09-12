import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Components/Login/Login-page/login";
import SignupPage from "./Components/Login/Signup-page/signup";
import AdminLogin from "./Sigin Page/admin-login";
import User from "./User/User";
import AdminHome from "./Admin/admin-home";
import { AppContext } from "./Context/AppContext";

const MailingSystem = () => {
  const { user } = useContext(AppContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/admin/*"
          element={user && user.user_type === "admin" ? <AdminHome /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <AdminLogin /> : <Navigate to={user.user_type === "admin" ? "/admin" : "/user"} />}
        />
        <Route
          path="/user/*"
          element={
            user && (user.user_type === "user" || user.user_type === "admin") 
              ? <User /> 
              : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default MailingSystem;