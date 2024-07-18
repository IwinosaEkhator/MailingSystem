import React from "react";
import { Link } from "react-router-dom";
import Adminorder from "../admin-order.js";

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
          <div className="inbound">
            <Adminorder
              header="Inbound"
              headers={inboundHeader}
            ></Adminorder>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbound;
