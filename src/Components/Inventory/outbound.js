import React, { useState } from "react";
import { Link } from "react-router-dom";
import Adminorder from "../admin-order.js";
import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const Outbound = () => {
  const outboundHeader = [
    "Serial Number",
    "UPC/Product Name",
    "Available",
    "Outbound Time",
  ];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCustomRange, setShowCustomRange] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDateRange(dates);
  };

  return (
    <>
      <div className="main-inside px-3">
        <div className="inbound-drop d-flex mx-4 ">
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
              <Dropdown.Toggle
                variant="secondary"
                className="border px-3 p-2 rounded"
                onClick={() => setShowCustomRange(!showCustomRange)}
              >
                {startDate && endDate ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}` : "Start date - End date"}
              </Dropdown.Toggle>
              {showCustomRange && (
                <div className="position-absolute p-3 date-dropdown" style={{ zIndex: 1000 }}>
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    placeholderText="Select Date Range"
                    className="form-control"
                  />
                </div>
              )}
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
