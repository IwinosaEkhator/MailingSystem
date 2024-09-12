import React, { useContext, useEffect, useState } from "react";

import "../../../admin.css";
import Adminorder from "../../../../Components/admin-order.jsx";
import Ordertable from "../../../../Components/order-table.jsx";
import Filter from "../../filter.jsx";
import Export_Print from "../../export.jsx";
import { AppContext } from "../../../../Context/AppContext.jsx";

const Pending = () => {
  const recentOrdersHeaders = [
    "ID-No",
    "Name",
    "Items",
    "Requested Time",
    "Status",
    "Actions",
  ];

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
        (request) => request.status === "pending"
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
      <div className="details requests pending">
        <Filter filterName="Pending time" />
        <Adminorder header="Pending" headers={recentOrdersHeaders}>
          {pendingRequests.length > 0 ? (
            pendingRequests.map((request) => (
              <div key={request.id}>
                <Ordertable
                  idNum={request.user.username}
                  tName={request.user.full_name}
                  tItems={request.request_items}
                  tStatus={request.status}
                  tDate={createdAt(request.created_at)}
                  tEdit={`/admin/delivery/${request.id}`}
                />
              </div>
            ))
          ) : (
            <div className="d-flex h-100 justify-content-center align-items-center">
              <p className="fw-bold fs-5">No pending requests</p>
            </div>
          )}
        </Adminorder>
      </div>
      <Export_Print />
    </>
  );
};

export default Pending;
