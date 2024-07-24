import React from "react";
import { Link } from "react-router-dom";
import Adminorder from "../admin-order.js";
import { Dropdown } from "react-bootstrap";

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
        <div className="inbound-drop d-flex mx-4 ">
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              className="border px-3 p-2 me-3 rounded"
            >
              Inbound time
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Last 24 hours</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Last 7 days</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Last 30 days</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              className="border px-3 p-2 rounded"
            >
              Start date - End date
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Custom Range</Dropdown.Item>
              <Dropdown.Item href="#/action-2">This Month</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Last Month</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
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
