import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/navbar";
import Dashboard from "./Components/Pages/Dashboard/dashboard";
import "./User.css";
import Footer from "./Components/footer";
import NewRequest from "./Components/Pages/New Requests/new-request";
import Success from "./Components/Pages/Success/success";

const User = () => {

  // useLocation hook to get the current location object
  const location = useLocation();

  // Array of routes that do not require Header and Footer
  const noFooterRoutes = ["/user/new-request" ,"/user/success" ];

  // Determine whether to show Header and Footer based on the current route
  const showFooter = !noFooterRoutes.includes(location.pathname);

  return (
    <>
      <div className={"body"}>
        <div className={"user-main"}>
          <Navbar />
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="new-request" element={<NewRequest/>}/>
            <Route path="success" element={<Success/>}/>
          </Routes>

          {showFooter && <Footer />}
        </div>
      </div>
    </>
  );
};

export default User;
