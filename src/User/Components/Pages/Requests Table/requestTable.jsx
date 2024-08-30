import React, { useEffect, useState } from "react";
import AdminOrder from "../../../../Components/admin-order";
import { AddedProducts, UserResquestTable } from "../../../../Components/order-table";

export const UserPending = () => {
  const myPendingHeaders = ["Request Item", "Request Time"];
  return (
    <>
      <span className="yellow">
        <AdminOrder header="Pending" headers={myPendingHeaders}></AdminOrder>
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
  function createdAt(createdAtDate) {
    return new Date(createdAtDate).toLocaleString();
  }

  async function getRequests() {
    const res = await fetch("/api/requests");
    const data = await res.json();

    if (res.ok) {
      setRequests(data);
    }
  }

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <>
      <span className="blue">
        <AdminOrder header="My Request" headers={myRequestHeaders}>
          {requests.length > 0 ? (
            requests.map((requests) => (
              <div key={requests.id}>
                <UserResquestTable rItems={requests.request_items} rTime={createdAt(requests.created_at)} />
              </div>
            ))
          ) : (
            <p>You have made no request</p>
          )}
        </AdminOrder>
      </span>
    </>
  );
};

export default UserResquest;
