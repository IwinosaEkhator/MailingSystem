import React, { useState } from "react";

import "../../../admin.css";
import Adminorder from "../../../../Components/admin-order.js";
import Ordertable from "../../../../Components/order-table.js";

const Pending = () => {
  const recentOrdersHeaders = [
    "ID-No",
    "Name",
    "Items",
    "Requested Time",
    "Status",
    "Actions",
  ];

  return (
    <>
      <div className="details requests pending">
        <Adminorder header="Pending" headers={recentOrdersHeaders}>
        <Ordertable
            idNum="npdc.b0000"
            tName="Ekhator Iwinosa"
            tItems="Laptop"
            tStatus="Denied"
            tDate="10-08-2024"
          />
          <Ordertable
            idNum="npdc.b0001"
            tName="Osunbor Favour"
            tItems="Laptop"
            tStatus="Approved"
            tDate="10-08-2024"
          />
          <Ordertable
            idNum="npdc.b0000"
            tName="Edwin Ezue"
            tItems="Laptop"
            tStatus="Approved"
            tDate="10-08-2024"
          />
          <Ordertable
            idNum="npdc.b0000"
            tName="Ugheoke Amhanosi"
            tItems="Laptop"
            tStatus="Pending"
            tDate="10-08-2024"
          />
          <Ordertable
            idNum="npdc.b0011"
            tName="Ugiagbe Francess"
            tItems="Laptop"
            tStatus="Pending"
            tDate="10-08-2024"
          />
        </Adminorder>
      </div>
    </>
  );
};

export default Pending;
