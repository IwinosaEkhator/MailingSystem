import React, { useState } from "react";
import { Link } from "react-router-dom";
import Adminorder from "../admin-order.js";
import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Inbound = () => {
  const inboundHeader = [
    "Serial Number",
    "UPC/Product Name",
    "Available",
    "Inbound Time",
  ];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCustomRange, setShowCustomRange] = useState(false);

  return (
    <>
      <div className="main-inside px-3">
        <div className="d-flex align-items-center justify-content-between mx-4 inbound-drop">
          <div className="inbound-drop d-flex">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" className="border px-3 p-2 me-3 rounded">
                Inbound time
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Last 24 hours</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Last 7 days</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Last 30 days</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" className="border px-3 p-2 rounded" onClick={() => setShowCustomRange(!showCustomRange)}>
                Start date - End date
              </Dropdown.Toggle>
              {showCustomRange && (
                <div className="p-3">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                    className="form-control mb-2"
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                    className="form-control"
                  />
                </div>
              )}
            </Dropdown>
          </div>
          <button className="py-2 px-5 m-0 btn rounded">Add Items</button>
        </div>
        <div className="details">
          <div className="inbound">
            <Adminorder header="Inbound" headers={inboundHeader}></Adminorder>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbound;