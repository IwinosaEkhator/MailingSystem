import React, { useState, useRef, useEffect, useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../Context/AppContext";

const NewRequest = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Select item(s)");
  const [isOpen, setIsOpen] = useState(false);
  const [requestedItems, setRequestedItems] = useState([]);
  const [formData, setFormData] = useState({
    request: "",
  });
  const [errors, setErrors] = useState({})

  const {token} = useContext(AppContext)

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const options = [
    { name: "Laptop", icon: <FaLaptop className="me-3" /> },
    { name: "Monitor", icon: <FaDesktop className="me-3" /> },
    { name: "Mouse", icon: <FaMouse className="me-3" /> },
    { name: "Keyboard", icon: <FaKeyboard className="me-3" /> },
    { name: "Dock Station", icon: <FaInbox className="me-3" /> },
    { name: "Desktop", icon: <FaComputer className="me-3" /> },
    { name: "Printer", icon: <TbPrinter className="me-3" /> },
    {
      name: "Cisco Telephone",
      icon: <TbDeviceLandlinePhone className="me-3" />,
    },
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
    const monitorExists = requestedItems.some(
      (item) => item.name === "Monitor"
    );
    if (option.name === "Monitor" && !monitorExists) {
      setRequestedItems([...requestedItems, { name: "Monitor", count: 1 }]);
      // console.log("Selected items: Monitor");
    } else if (
      option.name !== "Monitor" &&
      !requestedItems.some((item) => item.name === option.name)
    ) {
      setRequestedItems([...requestedItems, { name: option.name, count: 1 }]);
      // console.log(`Selected items: ${option.name}`);
    }
    setSelectedOption(option.name);
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleAddMonitor = () => {
    const monitorItem = requestedItems.find((item) => item.name === "Monitor");
    if (monitorItem && monitorItem.count === 1) {
      setRequestedItems((prevItems) =>
        prevItems.map((item) =>
          item.name === "Monitor" ? { ...item, count: item.count + 1 } : item
        )
      );
      // console.log("Selected items: Monitor, Monitor");
    }
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

  async function handleCreate(e) {
    e.preventDefault();
  
    // Map the requested items to formData.request
    const requestString = requestedItems
      .map((item) =>
        item.name === "Monitor" && item.count === 2
          ? ["Monitor", "Monitor"]
          : item.name
      )
      .flat()
      .join(" , ");
  
    // Update formData with the new request string
    setFormData({ request_items: requestString });
  
    const res = await fetch('/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ request_items: requestString })  // Ensure this matches the expected format
    });
  
    const data = await res.json();
    
    // Log the response from the API
    console.log(data);
  
    if (data.errors) {
      // console.error('API request failed:', data);
      setErrors(data.errors)
    } else {
      navigate("/user/success");  // Navigate on successful request
    }
  }
  

  return (
    <>
      <div className="new-request-page">
        <h1 className="text-center">New Request</h1>
        <form className="w-100" onSubmit={handleCreate}>
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
              {errors.request_items && (
                <p className="text-danger">{errors.request_items[0]}</p>
              )}
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
        </form>
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
                  {option?.icon} {item.name}{" "}
                  {item.name === "Monitor" && `(${item.count})`}
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
          <button
            type="submit"
            onClick={handleCreate}
            style={{
              margin: "50px 50px 30px",
              backgroundColor: "var(--green)",
              color: "#fff",
              padding: "15px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Send Request
          </button>
        )}
      </div>
    </>
  );
};

export default NewRequest;