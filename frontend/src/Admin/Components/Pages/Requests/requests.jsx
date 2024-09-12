import React, { useEffect, useState } from "react";

import "../../../admin.css";
import Adminorder from "../../../../Components/admin-order.jsx";
import Ordertable from "../../../../Components/order-table.jsx";
import Filter from "../../filter.jsx";
import Export_Print from "../../export.jsx";

const Requests = () => {
  const recentOrdersHeaders = [
    "ID-No",
    "Name",
    "Items",
    "Requested Time",
    "Status",
    "Actions",
  ];

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
      <div className="details requests">
        <Filter filterName="Requests time" itemBtn="Add Requests" />
        <Adminorder header="Requests" headers={recentOrdersHeaders}>
          {requests.length > 0 ? (
            requests.map((requests) => (
              <div key={requests.id}>
                <Ordertable
                  idNum={requests.user.username}
                  tName={requests.user.full_name}
                  tItems={requests.request_items}
                  tStatus={requests.status}
                  tDate={createdAt(requests.created_at)}
                  tEdit={`/admin/delivery/${requests.id}`}
                />
              </div>
            ))
          ) : (
            <p>You have made no request</p>
          )}
        </Adminorder>
      </div>
      <Export_Print />
    </>
  );
};

export default Requests;
