import React from "react";
import { FaRegShareSquare } from "react-icons/fa";

import nnpclogo from "../../Components/Assets/nnpc-logo.png";

const Invoice = (props) => {
  const handlePrint = () => {
    const printContents = document.getElementById("invoice").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload the page to revert back to the original content
  };

  const generatePdf = () => {
    const input = document.getElementById("invoice");
    return html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth * 0.95; // Reduce image width slightly to fit the page
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let x = (pdfWidth - imgWidth) / 2; // Center horizontally
      let y = (pdfHeight - imgHeight) / 2; // Center vertically (for first page)

      if (imgHeight <= pdfHeight) {
        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      } else {
        let heightLeft = imgHeight;
        let position = 0;

        while (heightLeft > 0) {
          pdf.addImage(imgData, "PNG", x, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
          position -= pdfHeight;
          if (heightLeft > 0) {
            pdf.addPage();
          }
        }
      }

      return pdf;
    });
  };

  const handleDownload = () => {
    generatePdf()
      .then((pdf) => {
        pdf.save("invoice.pdf");
        setSuccessMessage("Successfully downloaded!");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  const handleShare = async () => {
    try {
      const pdf = await generatePdf();
      const pdfBlob = pdf.output("blob");

      const file = new File([pdfBlob], "invoice.pdf", {
        type: "application/pdf",
        lastModified: new Date().getTime(),
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Invoice",
          text: "Check out this invoice!",
        });
        setSuccessMessage("Successfully shared!");
      } else {
        alert(
          "Share not supported on this browser, please copy the link manually."
        );
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  // Ensure we always display at least 7 rows
  const getRows = () => {
    const rows = [];
    for (let i = 0; i < 7; i++) {
      rows.push(
        forms[i] || {
          description: { SN: "", domainName: "", computerName: "" },
          unit: "",
          quantity: "",
        }
      );
    }
    return rows;
  };

  return (
    <>
      <div className="receipt-content">
        <div className="container bootstrap snippets bootdey">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-end mt-4">
                <button
                  className="btn me-2 btn-outline-success"
                  title="Download"
                  style={{ fontSize: "20px" }}
                  onClick={handleDownload}
                >
                  Download
                </button>
                <button
                  className="btn btn-outline-success"
                  title="Share"
                  onClick={handleShare}
                >
                  <FaRegShareSquare style={{ fontSize: "25px" }} />
                </button>
              </div>
              <div className="invoice-wrapper" id="invoice">
                <div className="intro row text-capitalize">
                  <div className="col-2">
                    <img src={nnpclogo} className="w-100" alt="NNPC Logo"></img>
                  </div>
                  <div className="col-8 text-center">
                    <h5>
                      NNPC E & P Limited <br /> (A Subsidiary of NNPC)
                    </h5>
                    <h3>
                      <strong>Internal Delivery Note</strong>
                    </h3>
                  </div>
                </div>

                <div className="payment-info">
                  <div className="row">
                    <div className="col-sm-6">
                      <span>Delivery No.</span>
                      <strong>000000001</strong>
                    </div>
                    <div className="col-sm-6 text-end">
                      <span>Date</span>
                      <strong>{props.invoiceDate}</strong>
                    </div>
                  </div>
                </div>

                <div className="payment-details">
                  <div className="row">
                    <div className="col-sm-6">
                      <span>From</span>
                      <strong>{props.invoiceFrom}</strong>
                    </div>
                    <div className="col-sm-6 text-end">
                      <span>To</span>
                      <strong>{props.invoiceTo}</strong>
                      <p>
                        {props.invoiceToId} <br />
                        {props.invoiceToDepartment}
                      </p>
                    </div>
                  </div>
                </div>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        Item <br /> No
                      </th>
                      <th scope="col">Description of Materials</th>
                      <th scope="col" className="text-center">
                        Unit
                      </th>
                      <th scope="col" className="text-center">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getRows().map((form, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          {props.descriptionComputerName} <br />
                          {props.descriptionSN} <br />
                          {props.descriptionDomainName}
                        </td>
                        <td className="text-center">{props.unit}</td>
                        <td className="text-center">{props.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="row mt-5">
                  <div className="col-8 pe-5">
                    <strong>Delivered by:</strong>
                    <p className="mt-2 mb-0">Name: {props.de_name}</p>
                    <p className="mb-0">Rank: {props.de_rank}</p>
                    <p>Date: {props.de_date}</p>
                  </div>
                  <div className="col-4">
                    <strong className="pb-3">Received by:</strong>
                    <p className="mt-2 mb-0">Name: {props.invoiceTo}</p>
                    <p className="mb-0">Rank: {props.invoiceToDepartment}</p>
                    <p>Date: {formData.re_date}</p>
                  </div>
                </div>

                <div className="footer">Copyright © 2024. NNPC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
