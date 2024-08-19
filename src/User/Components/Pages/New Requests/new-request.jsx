import React, { useState, useRef, useEffect } from "react";
import "../../../User.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  FaLaptop,
  FaDesktop,
  FaMouse,
  FaKeyboard,
  FaInbox,
  FaHeadphones,
  FaPlus,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { TbDeviceLandlinePhone, TbPrinter } from "react-icons/tb";
import { Link } from "react-router-dom";

const NewRequest = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Select designation");
  const [isOpen, setIsOpen] = useState(false);
  const [requestedItems, setRequestedItems] = useState([]);

  const dropdownRef = useRef(null);

  const options = [
    { name: "Laptop", icon: <FaLaptop className="me-3" /> },
    { name: "Monitor", icon: <FaDesktop className="me-3" /> },
    { name: "Mouse", icon: <FaMouse className="me-3" /> },
    { name: "Keyboard", icon: <FaKeyboard className="me-3" /> },
    { name: "Dock Station", icon: <FaInbox className="me-3" /> },
    { name: "Desktop", icon: <FaComputer className="me-3" /> },
    { name: "Printer", icon: <TbPrinter className="me-3" /> },
    { name: "Cisco Telephone", icon: <TbDeviceLandlinePhone className="me-3" /> },
    { name: "Headset", icon: <FaHeadphones className="me-3" /> },
  ];

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleOptionClick = (option) => {
    const monitorCount = requestedItems.filter((item) => item.name === "Monitor").length;
    if (option.name === "Monitor" && monitorCount === 0) {
      setRequestedItems([...requestedItems, { name: option.name, count: 1 }]);
    } else if (
      option.name !== "Monitor" &&
      !requestedItems.some((item) => item.name === option.name)
    ) {
      setRequestedItems([...requestedItems, { name: option.name, count: 1 }]);
    }
    setSelectedOption(option.name);
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleAddMonitor = () => {
    setRequestedItems((prevItems) =>
      prevItems.map((item) =>
        item.name === "Monitor" && item.count < 2
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (itemName) => {
    setRequestedItems(
      requestedItems.filter((requestedItem) => requestedItem.name !== itemName)
    );
  };

  const handleClearAll = () => {
    setRequestedItems([]);
  };

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
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
      <div className="new-request-page">
        <h1 className="text-center">New Request</h1>
        <div className="user-request">
          <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-header d-flex" onClick={toggleDropdown}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className="search-input"
                placeholder={selectedOption}
              />
            </div>
            {isOpen && (
              <ul className={`dropdown-list ${isOpen ? "show" : ""}`}>
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option, index) => (
                    <li
                      key={index}
                      className="dropdown-list-item d-flex align-items-center"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.icon} {option.name}
                    </li>
                  ))
                ) : (
                  <li className="dropdown-list-item no-results">
                    No results found
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="request-list list-group">
        <span className="d-flex justify-content-between">
          <h2>List Of Requested Items ({requestedItems.length})</h2>
          {requestedItems.length > 0 && (
            <button className="bg-danger" onClick={handleClearAll}>
              Clear
            </button>
          )}
        </span>
        <ul className="list-item mt-5">
          {requestedItems.map((item, index) => {
            const option = options.find((option) => option.name === item.name);
            return (
              <li
                key={index}
                className="d-flex align-items-center justify-content-between"
              >
                <span>
                  {option?.icon} {item.name} {item.name === "Monitor" && `(${item.count})`}
                </span>
                <span>
                  {item.name === "Monitor" && item.count < 2 && (
                    <FaPlus
                      style={{ fontSize: "24px", cursor: "pointer" }}
                      className="text-success me-3"
                      onClick={handleAddMonitor}
                    />
                  )}
                  <RiDeleteBin6Line
                    className="text-danger ms-auto"
                    style={{ fontSize: "24px", cursor: "pointer" }}
                    onClick={() => handleRemoveItem(item.name)}
                  />
                </span>
              </li>
            );
          })}
        </ul>
        {requestedItems.length > 0 && (
          <Link to="/user/success" style={{ margin: "50px 50px 30px" }}>
            Send Request
          </Link>
        )}
      </div>
    </>
  );
};

export default NewRequest;