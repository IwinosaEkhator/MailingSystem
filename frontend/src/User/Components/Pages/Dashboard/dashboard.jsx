import React, { useState, useEffect, useContext } from "react";
import Card from "../../../../Components/admin-card";
import { useNavigate, Routes, Route } from "react-router-dom";
import UserRequest, {
  UserApproved,
  UserDeclined,
  UserPending,
} from "../Requests Table/requestTable"; 
import { AppContext } from "../../../../Context/AppContext"; // adjust the import path as needed

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AppContext); // Get the logged-in user's info from context
  const [requests, setRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [declinedRequests, setDeclinedRequests] = useState([]);

  // Function to handle navigation to the New Request page
  const handleNewRequestClick = () => {
    navigate("/user/new-request");
  };

  async function getRequests() {
    const res = await fetch("/api/requests");
    const data = await res.json();

    if (res.ok) {
      // Filter requests based on their status
      const userRequests = data.filter(request => request.user_id === user.id);
      const pending = userRequests.filter(request => request.status === "pending");
      const approved = userRequests.filter(request => request.status === "approved");
      const declined = userRequests.filter(request => request.status === "declined");

      setRequests(userRequests);
      setPendingRequests(pending);
      setApprovedRequests(approved);
      setDeclinedRequests(declined);
    }
  }

  useEffect(() => {
    if (user) {
      getRequests(); 
    }
  }, [user]);

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
              <Card aName="Requests" aNum={requests.length} aLink="/user"></Card>
              <Card aName="Pending" aNum={pendingRequests.length} aLink="/user/pending"></Card>
              <Card aName="Approved" aNum={approvedRequests.length} aLink="/user/approved"></Card>
              <Card aName="Declined" aNum={declinedRequests.length} aLink="/user/declined"></Card>
            </div>
            <div className="details">
              <Routes>
                <Route path="/" element={<UserRequest />} />
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