import React from "react";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

const Export_Print = () => {
  return (
    <>
      <span className="ms-5">
        <span
          style={{
            color: "var(--black1)",
            fontSize: "18px",
            marginRight: "6px",
          }}
        >
          Export/Print
        </span>
        <span style={{ fontSize: "25px" }}>
          <FaFilePdf style={{ color: "var(--red)", marginRight: "3px" }} />
          <IoDocumentTextSharp
            style={{ color: "var(--light-blue)", marginRight: "3px" }}
          />
          <PiMicrosoftExcelLogo style={{ color: "var(--green)" }} />
        </span>
      </span>
    </>
  );
};

export default Export_Print;
