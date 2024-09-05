import React, { useContext, useEffect, useState } from "react";
import AdminOrder from "../../../../Components/admin-order";
import { AddedProducts, UserRequestTable } from "../../../../Components/order-table";
import { AppContext } from "../../../../Context/AppContext";

export const UserPending = () => {
  const myPendingHeaders = ["Request Item", "Request Time"];
  const [pendingRequests, setPendingRequests] = useState([]);
  const { user } = useContext(AppContext);

  function createdAt(createdAtDate) {
    return new Date(createdAtDate).toLocaleString();
  }

  async function getRequests() {
    const res = await fetch("/api/requests");
    const data = await res.json();

    if (res.ok) {
      // Filter pending requests for the logged-in user
      const userPendingRequests = data.filter(
        request => request.user_id === user.id && request.status === "pending"
      );
      setPendingRequests(userPendingRequests);
    }
  }

  useEffect(() => {
    if (user) {
      getRequests();
    }
  }, [user]);

  return (
    <>
      <span className="yellow">
        <AdminOrder header="Pending" headers={myPendingHeaders}>
          {pendingRequests.length > 0 ? (
            pendingRequests.map((request) => (
              <div key={request.id}>
                <UserRequestTable
                  rItems={request.request_items} 
                  rTime={createdAt(request.created_at)} 
                />
              </div>
            ))
          ) : (
            <div className="d-flex h-100 justify-content-center align-items-center">
              <p className="fw-bold fs-5">No pending requests</p>
            </div>
          )}
        </AdminOrder>
      </span>
    </>
  );
};

export const UserApproved = () => {
  const myApprovedHeaders = ["Request Item", "Request Time", "Accepted Time"];
  return (
    <>
      <span className="green">
        <AdminOrder header="Approved" headers={myApprovedHeaders}></AdminOrder>
      </span>
    </>
  );
};

export const UserDeclined = () => {
  const myDeclinedHeaders = ["Request Item", "Request Time", "Declined Time"];
  return (
    <>
      <span className="red">
        <AdminOrder header="Declined" headers={myDeclinedHeaders}></AdminOrder>
      </span>
    </>
  );
};

const UserResquest = () => {
  const myRequestHeaders = ["Request Items", "Request Time"];
  const [requests, setRequests] = useState([]);
  const { user } = useContext(AppContext); // Get the logged-in user's info from context

  function createdAt(createdAtDate) {
    return new Date(createdAtDate).toLocaleString();
  }

  async function getRequests() {
    const res = await fetch("/api/requests");
    const data = await res.json();

    if (res.ok) {
      // Filter requests to show only those made by the logged-in user
      const userRequests = data.filter(request => request.user_id === user.id);
      setRequests(userRequests);
    }
  }

  useEffect(() => {
    if (user) {
      getRequests();
    }
  }, [user]);

  return (
    <>
      <span className="blue">
        <AdminOrder header="My Request" headers={myRequestHeaders}>
          {requests.length > 0 ? (
            requests.map((request) => (
              <div key={request.id}>
                <UserRequestTable
                  rItems={request.request_items} 
                  rTime={createdAt(request.created_at)} 
                />
              </div>
            ))
          ) : (
            <div className="d-flex h-100 justify-content-center align-items-center">
              <p className="fw-bold fs-5">You have made no requests</p>
            </div>
          )}
        </AdminOrder>
      </span>
    </>
  );
};

export default UserResquest;
