import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Dashboard from "./Dashboard/dashboard";
import "./User.css";
import Footer from "./footer";
import NewRequest from "./New Requests/new-request";

const User = () => {
  return (
    <>
      <div className={"body"}>
        <div className={"user-main"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="new-request" element={<NewRequest/>}/>
          </Routes>

          <Footer/>
        </div>
      </div>
    </>
  );
};

export default User;
