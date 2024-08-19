import React from "react";
import Card from "../../../../Components/admin-card";
import { useNavigate, Routes, Route } from "react-router-dom";
import UserResquest, {
  UserApproved,
  UserDeclined,
  UserPending,
} from "../Requests Table/requestTable";

const Dashboard = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the New Request page
  const handleNewRequestClick = () => {
    navigate("/user/new-request");
  };

  return (
    <>
      <div className="row user-dashboard">
        <div className="col-5">
          <div className="new-request">
            <h1>ITSM Self-Service Portal</h1>
            <p>
              Our IT department is dedicated to ensuring that all employees have
              the technological tools and support they need to perform their
              jobs efficiently.
            </p>
            <button onClick={handleNewRequestClick}>New Request</button>
          </div>
        </div>
        <div className="col-7 summary">
          <h2 style={{ paddingLeft: "20px", fontSize: "30px" }}>Summary</h2>
          <div>
            <div className="cardBox">
              <Card aName="Requests" aNum="10" aLink="/user"></Card>
              <Card aName="Pending" aNum="5" aLink="/user/pending"></Card>
              <Card aName="Approved" aNum="3" aLink="/user/approved"></Card>
              <Card aName="Declined" aNum="2" aLink="/user/declined"></Card>
            </div>
            <div className="details">
              <Routes>
                <Route path="/" element={<UserResquest />} />
                <Route path="pending" element={<UserPending />} />
                <Route path="approved" element={<UserApproved />} />
                <Route path="declined" element={<UserDeclined />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
