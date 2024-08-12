import React, { useState, useEffect } from "react";
import Export_Print from "../../export";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";


function Report() {
  const [content, setContent] = useState("requests");
  const [subContentOptions, setSubContentOptions] = useState([]);

  // Define the sub-content options for each content type
  const optionsMap = {
    requests: [
      { value: "all", label: "All" },
      { value: "pending", label: "Pending" },
      { value: "approved", label: "Approved" },
      { value: "declined", label: "Declined" },
    ],
    inventory: [
      { value: "inbound", label: "Inbound" },
      { value: "outbound", label: "Outbound" },
      { value: "categories", label: "Categories" },
    ],
    categories: [
      { value: "laptop", label: "Laptop" },
      { value: "desktop", label: "Desktop" },
      { value: "keyboard", label: "Keyboard" },
    ],
  };

  // Update sub-content options when content changes
  useEffect(() => {
    setSubContentOptions(optionsMap[content]);
  }, [content]);

  return (
    <>
      <div className="d-flex justify-content-between report">
        <div className="create-report">
          <h3>Create a Report</h3>

          <form>
            <div className="form-group">
              <label htmlFor="start-d">Start Date</label>
              <input type="datetime-local" name="start-d" id="start-d" />
            </div>

            <div className="form-group">
              <label htmlFor="end-d">End Date</label>
              <input type="datetime-local" name="end-d" id="end-d" />
            </div>

            <div className="form-group">
              <label htmlFor="date-range">Date Range</label>
              <select name="date-range" id="date-range" className="form-select">
                <option value="last-30-days">Last 30 days</option>
                <option value="previous-month">Previous Month</option>
                <option value="last-7-days">Last 7 days</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="report-title">Report Title</label>
              <input
                type="text"
                name="report-title"
                id="report-title"
                placeholder="Enter report title"
              />
            </div>
          </form>
        </div>

        <div className="build-report">
          {/* Report preview or output will be displayed here */}
          <div className="border-bottom p-3 text-end">
            <a className="me-3 build-r active">Build Report</a>
            <a className="me-3 view-r">View Report</a>
          </div>

          <form action="" className="report-class">
            <div className="form-group mb-4">
              <select
                name="content"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="form-select select1"
              >
                <option value="requests">Requests</option>
                <option value="inventory">Inventory</option>
                <option value="categories">Categories</option>
              </select>
            </div>

            <div className="form-group">
              <select
                name="sub-content"
                id="sub-content"
                className="form-select select1"
              >
                {subContentOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <span style={{ fontSize: "29px", padding: "0 30px" }}>
            <FaFilePdf style={{ color: "var(--red)", marginRight: "8px" }} />
            <IoDocumentTextSharp
              style={{ color: "var(--light-blue)", marginRight: "8px" }}
            />
            <PiMicrosoftExcelLogo style={{ color: "var(--green)" }} />
          </span>
        </div>
      </div>
    </>
  );
}

export default Report;
