import React, { useState, useRef, useEffect } from "react";
import Adminorder from "../../../../Components/admin-order.js";
import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Filter from "../../filter.jsx";
import Export_Print from "../../export.jsx";

const Inbound = () => {
  const outboundHeader = [
    "Serial Number",
    "UPC/Product Name",
    "Amount Delivered",
    "Outbound Time",
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
        <div className="details">
        <Filter filterName="Outbound time" itemBtn="Remove Items"/>
          <div className="inbound">
            <Adminorder header="Outbound" headers={outboundHeader}></Adminorder>
          </div>
        </div>
        <Export_Print />
      </div>
    </>
  );
};

export default Inbound;