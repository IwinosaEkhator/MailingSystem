import React, { useState, useRef, useEffect } from "react";
import Adminorder from "../../../../Components/admin-order.js";
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
  const calendarRef = useRef(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCustomRange(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="main-inside px-3">
        <div className="d-flex align-items-center justify-content-between mx-4 inbound-drop">
          <div className="inbound-drop d-flex position-relative">
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
                <div className="position-absolute p-3 date-dropdown" style={{ zIndex: 1000 }} ref={calendarRef}>
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