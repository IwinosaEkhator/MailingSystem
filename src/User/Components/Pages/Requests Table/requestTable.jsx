import React from "react";
import AdminOrder from "../../../../Components/admin-order";

export const UserPending = () => {
  const myPendingHeaders = ["Request Item", "Request Date"];
  return (
    <>
      <span className="yellow">
        <AdminOrder header="Pending" headers={myPendingHeaders}></AdminOrder>
      </span>
    </>
  );
};

export const UserApproved = () => {
  const myApprovedHeaders = ["Request Item", "Request Date", "Accepted Date"];
  return (
    <>
      <span className="green">
        <AdminOrder header="Approved" headers={myApprovedHeaders}></AdminOrder>
      </span>
    </>
  );
};

export const UserDeclined = () => {
  const myDeclinedHeaders = ["Request Item", "Request Date", "Declined Date"];
  return (
    <>
      <span className="red">
        <AdminOrder header="Declined" headers={myDeclinedHeaders}></AdminOrder>
      </span>
    </>
  );
};

const UserResquest = () => {
  const myRequestHeaders = ["Request Item", "Request Date"];
  return (
    <>
      <span className="blue">
        <AdminOrder header="My Request" headers={myRequestHeaders}></AdminOrder>
      </span>
    </>
  );
};

export default UserResquest;
