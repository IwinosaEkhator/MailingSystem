import React from "react";
import { Link } from "react-router-dom";
import Adminorder from "../admin-order.js";

const Outbound = () => {

    const outboundHeader = [
        "Serial Number",
        "UPC/Product Name",
        "Available",
        "Outbound Time",
      ];

  return (
    <>
      <div className="main-inside px-3">
        <div className="details">
          <div className="inbound">
            <Adminorder header="Outbound" headers={outboundHeader}></Adminorder>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outbound;
