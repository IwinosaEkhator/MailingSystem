import React, { useState } from "react";

import "../../../admin.css";
import Adminorder from "../../../../Components/admin-order.jsx";
import Ordertable from "../../../../Components/order-table.jsx";
import Filter from "../../filter.jsx";
import Export_Print from "../../export.jsx";

const Approved = () => {
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
      <div className="details requests approved">
        <Filter filterName="Approved time" />
        <Adminorder header="Approved" headers={recentOrdersHeaders}>
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
      <Export_Print />
    </>
  );
};

export default Approved;
