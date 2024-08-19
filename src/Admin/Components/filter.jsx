import React, { useState, useRef, useEffect } from "react";

import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = (props) => {
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
      <div className="d-flex align-items-center justify-content-between mx-0 mb-4 inbound-drop">
        <div className="inbound-drop d-flex position-relative">
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              className="border px-3 p-2 me-3 rounded"
            >
              {props.filterName}
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
              {startDate && endDate
                ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                : "Start date - End date"}
            </Dropdown.Toggle>
            {showCustomRange && (
              <div
                className="position-absolute  p-3 date-dropdown"
                style={{ zIndex: 1000 }}
                ref={calendarRef}
              >
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
        <div className="d-flex">
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-4" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          {props.itemBtn ? (
            <button className="py-2 px-5 m-0 btn rounded">
              {props.itemBtn}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Filter;
