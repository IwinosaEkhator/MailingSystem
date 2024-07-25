import React, { useState, useRef, useEffect } from "react";
import "../User.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  FaLaptop,
  FaDesktop,
  FaMouse,
  FaKeyboard,
  FaInbox,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewRequest = () => {
  // State variables to manage search term, selected option, dropdown state, and requested items
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Select designation");
  const [isOpen, setIsOpen] = useState(false);
  const [requestedItems, setRequestedItems] = useState([]);

  // Ref for the dropdown to detect clicks outside the dropdown
  const dropdownRef = useRef(null);

  // Define options with corresponding icons
  const options = [
    { name: "Laptop", icon: <FaLaptop className="me-3" /> },
    { name: "Monitor", icon: <FaDesktop className="me-3" /> },
    { name: "Mouse", icon: <FaMouse className="me-3" /> },
    { name: "Keyboard", icon: <FaKeyboard className="me-3" /> },
    { name: "Dock Station", icon: <FaInbox className="me-3" /> },
    { name: "Desktop", icon: <FaComputer className="me-3" /> },
    { name: "Printer", icon: <FaComputer className="me-3" /> },
    { name: "Cisco Telephone", icon: <FaComputer className="me-3" /> },

  ];

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Function to handle input change in the search box
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true); // Open the dropdown if it's not already open
    }
  };

  // Function to handle option click
  const handleOptionClick = (option) => {
    const monitorCount = requestedItems.filter(item => item === "Monitor").length;
    if (option.name === "Monitor" && monitorCount < 2) {
      // Allow up to two monitors
      setRequestedItems([...requestedItems, option.name]);
    } else if (option.name !== "Monitor" && !requestedItems.includes(option.name)) {
      // Add other items only once
      setRequestedItems([...requestedItems, option.name]);
    }
    setSelectedOption(option.name); // Set the selected option
    setSearchTerm(""); // Clear the search term
    setIsOpen(false); // Close the dropdown
  };

  // Function to handle removing an item from the requested items list
  const handleRemoveItem = (item) => {
    setRequestedItems(
      requestedItems.filter((requestedItem) => requestedItem !== item)
    );
  };

  // Function to handle clearing all requested items
  const handleClearAll = () => {
    setRequestedItems([]); // Clear all items from the requested items list
  };

  // Filter options based on the search term
  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown if the click is outside the dropdown
    }
  };

  // Add event listener to detect clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the event listener
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
                      className="dropdown-list-item"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.name}
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
            // Find the icon associated with the item
            const option = options.find((option) => option.name === item);
            return (
              <li key={index} className="d-flex align-items-center">
                {option?.icon} {item}
                <RiDeleteBin6Line
                  className="text-danger ms-auto"
                  style={{ fontSize: "24px", cursor: "pointer" }}
                  onClick={() => handleRemoveItem(item)}
                />
              </li>
            );
          })}
        </ul>
        {/* Conditionally render the "Send Request" button */}
        {requestedItems.length > 0 && (
          <Link to="/user/success" style={{ margin: "50px 50px 30px" }}>Send Request</Link>
        )}
      </div>
    </>
  );
};

export default NewRequest;