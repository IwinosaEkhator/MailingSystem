import React, { useState, useRef, useEffect } from "react";

import Adminorder from "../../../../Components/admin-order.jsx";
import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { PiExport } from "react-icons/pi";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Export_Print from "../../export.jsx";
import Filter from "../../filter.jsx";

const Inbound = () => {
  const inboundHeader = [
    "Serial Number",
    "UPC/Product Name",
    "Available",
    "Inbound Time",
  ];

  return (
    <>
      <div className="main-inside px-3">
        <div className="details">
          <Filter filterName="Inbound time" itemBtn="Add Items" />
          <div className="inbound">
            <Adminorder header="Inbound" headers={inboundHeader}></Adminorder>
          </div>
        </div>
        <Export_Print />
      </div>
    </>
  );
};

export default Inbound;
