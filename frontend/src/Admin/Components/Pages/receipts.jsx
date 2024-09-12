import React from "react";
import { BiReceipt } from "react-icons/bi";

function Receipts() {
  const receipts = [
    {
      id: "00001",
      name: "Ekhator Iwinosa",
      day: "10/08/2024",
      date: "10/08/2024 12:00",
    },
    {
      id: "00002",
      name: "John Doe",
      day: "09/08/2024",
      date: "09/08/2024 15:30",
    },
    {
      id: "00003",
      name: "Jane Smith",
      day: "08/08/2024",
      date: "08/08/2024 09:45",
    },
    {
      id: "00004",
      name: "Alice Brown",
      day: "07/08/2024",
      date: "07/08/2024 14:20",
    },
    {
      id: "00005",
      name: "Charlie Johnson",
      day: "06/08/2024",
      date: "06/08/2024 16:00",
    },
    {
      id: "00006",
      name: "Emily Davis",
      day: "05/08/2024",
      date: "05/08/2024 10:30",
    },
    {
      id: "00007",
      name: "Michael Wilson",
      day: "04/08/2024",
      date: "04/08/2024 11:15",
    },
    {
      id: "00009",
      name: "Olivia Martinez",
      day: "03/08/2024",
      date: "03/08/2024 09:00",
    },
    // Add more receipts as needed
  ];

  return (
    <div>
      <h1 className="catTitle">Receipts</h1>
      <div className="receipts-grid mx-3">
        {receipts.map((receipt) => (
          <div key={receipt.id} className="receipts-grid__item">
            <span className="d-flex align-items-center">
              <BiReceipt style={{ fontSize: "50px", marginRight: "10px" }} />
              <span style={{ fontSize: "15px" }}>
                <span className="receipt-id">Receipt ID: {receipt.id}</span>
                <span className="requester-name">{receipt.name}</span>{" "}
                <span className="created-date">{receipt.date}</span>
              </span>
            </span>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Receipts;
