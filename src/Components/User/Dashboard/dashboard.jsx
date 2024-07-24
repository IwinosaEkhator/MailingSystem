import React from "react";
import Card from "../../admin-card";
import AdminOrder from "../../admin-order";

const Dashboard = () => {
  const myRequestHeaders = ["Request Item", "Request Date"];
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
            <button>New Request</button>
          </div>
        </div>
        <div className="col-7 summary">
          <h2 style={{ paddingLeft: "20px", fontSize: "30px" }}>Summary</h2>
          <div>
            <div className="cardBox">
              <Card aName="Requests" aNum="100" aLink="/requests"></Card>
              <Card aName="Pending" aNum="50" aLink="/pending"></Card>
              <Card aName="Approved" aNum="30" aLink="/approved"></Card>
              <Card aName="Declined" aNum="20" aLink="/declined"></Card>
            </div>
            <div className="details">
              <AdminOrder
                header="My Request"
                headers={myRequestHeaders}
              ></AdminOrder>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
