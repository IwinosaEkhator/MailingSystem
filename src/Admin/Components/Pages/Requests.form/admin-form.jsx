import React, { useContext, useEffect, useState } from "react";
import AdminFormComponents from "./adminFormComp";
import "../../../admin.css";
import { FaRegShareSquare } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import nnpclogo from "../../../../Components/Assets/nnpc-logo.png";
import Resquestorder from "./request-order";
import Requesttable from "./request-table";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { AppContext } from "../../../../Context/AppContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const AdminForm = () => {
  const [step, setStep] = useState(1);
  const [forms, setForms] = useState([
    {
      id: Date.now(),
      description: { SN: "", domainName: "", computerName: "" },
      unit: "",
      quantity: "",
    },
  ]);
  const [formData, setFormData] = useState({
    from: "",
    date: "",
    de_name: "",
    de_rank: "",
    de_sign: "",
    de_date: "",
    re_name: "",
    re_rank: "",
    re_sign: "",
    re_date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [delivery, setDelivery] = useState(null);
  const [errors, setErrors] = useState({})
  const { id } = useParams();
  const { token } = useContext(AppContext); // Assuming AppContext provides user
  const navigate = useNavigate()

  // Fetch delivery data by ID
  async function getRequests() {
    try {
      const res = await fetch(`/api/requests/${id}`);
      const data = await res.json();
      if (res.ok) {
        setDelivery(data);
      } else {
        console.error("Failed to fetch delivery");
      }
    } catch (error) {
      console.error("Error fetching delivery:", error);
    }
  }

  useEffect(() => {
    getRequests();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  const addForm = () => {
    setForms([
      ...forms,
      {
        id: Date.now(),
        description: { SN: "", domainName: "", computerName: "" },
        unit: "",
        quantity: "",
      },
    ]);
  };

  const removeForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  const handleUpdateDescription = (id, description, unit, quantity) => {
    setForms(
      forms.map((form) =>
        form.id === id ? { ...form, description, unit, quantity } : form
      )
    );
  };

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

  async function handleSubmit (e) {
    e.preventDefault();
    console.log(formData, forms);

    const res = await fetch('/api/delivery', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData, forms),
    })

    const data = await res.json()

    if (data.errors) {
      setErrors(data.errors)
    } else {
      navigate("/")
    }

    console.log(data)

    setSubmitted(true);
    nextStep();
  };

  // Safely access full_name using optional chaining
  const fullName = delivery?.user?.full_name || "Loading...";
  const idNum = delivery?.user?.username || "Loading...";
  const requestedItems = delivery?.request_items|| "Loading...";

  return (
    <div className="App">
      <button className="btn ms-5" onClick={prevStep}>
        <IoIosArrowBack className="fs-4" />
      </button>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Internal Delivery Note</h1>
        <form className="admin-form" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="list-group">
              <AdminFormComponents
                fName="Date"
                fElement="date"
                fType="date"
                fOnChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                fValue={formData.date}
              />
              {errors.date && (
                <p className="text-danger ms-3">{errors.date[0]}</p>
              )}

              <AdminFormComponents
                fName="From"
                fElement="from"
                fType="text"
                fOnChange={(e) =>
                  setFormData({ ...formData, from: e.target.value })
                }
                fValue={formData.from}
              />
              {errors.from && (
                <p className="text-danger ms-3">{errors.from[0]}</p>
              )}

              <div className="li-group">
                <AdminFormComponents
                  fName="To"
                  fElement="to"
                  fType="text"
                  fOnChange={handleChange}
                  fValue={fullName} // Use fullName variable here
                />

                <AdminFormComponents
                  fName="ID No"
                  fElement="id_no"
                  fType="text"
                  fOnChange={handleChange}
                  fValue={idNum}
                />
              </div>

              <button
                className="admin-form-button"
                type="button"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="details" style={{ width: "1000px" }}>
              <Resquestorder addForm={addForm}>
                {forms.map((form, index) => (
                  <Requesttable
                    key={form.id}
                    tKey={form.id}
                    tItem={index + 1}
                    tDescription={form.description}
                    tUnit={form.unit}
                    tQuantity={form.quantity}
                    handleUpdateDescription={handleUpdateDescription}
                    removeForm={removeForm}
                  />
                ))}
              </Resquestorder>
              <div className="li-group w-25">
                <button
                  className="admin-form-button"
                  type="button"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button
                  className="admin-form-button"
                  type="button"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
              <div className="mt-5 ms-4">
                <h3 style={{ color: "var(--green)" }}>Requested Item</h3>
                <p>{requestedItems}</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="list-group mt-1">
              <div className="d-flex justify-space-between">
                <div className="list-group">
                  <h3>Delivered by</h3>

                  <AdminFormComponents
                    fName="Name"
                    fPlaceholder=""
                    fElement="de_name"
                    fType="text"
                    fOnChange={handleChange}
                    fValue={formData.de_name}
                  />
                  <AdminFormComponents
                    fName="Rank"
                    fPlaceholder=""
                    fElement="de_rank"
                    fType="text"
                    fOnChange={handleChange}
                    fValue={formData.de_rank}
                  />
                  <AdminFormComponents
                    fName="Signature"
                    fPlaceholder=""
                    fElement="de_sign"
                    fType="text"
                    fOnChange={handleChange}
                    fValue={formData.de_sign}
                  />
                  <AdminFormComponents
                    fName="Date"
                    fPlaceholder=""
                    fElement="de_date"
                    fType="date"
                    fOnChange={handleChange}
                    fValue={formData.de_date}
                  />
                </div>
              </div>
              <div className="li-group">
                <button
                  className="admin-form-button"
                  type="button"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button className="admin-form-button" type="submit">
                  Submit
                </button>
              </div>
            </div>
          )}

          {step === 4 && submitted && (
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
                          <img
                            src={nnpclogo}
                            className="w-100"
                            alt="NNPC Logo"
                          ></img>
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
                            <strong>{formData.date}</strong>
                          </div>
                        </div>
                      </div>

                      <div className="payment-details">
                        <div className="row">
                          <div className="col-sm-6">
                            <span>From</span>
                            <strong>{formData.from}</strong>
                          </div>
                          <div className="col-sm-6 text-end">
                            <span>To</span>
                            <strong>{fullName}</strong>
                            <p>
                              {idNum} <br />
                              DM Well Engineering
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
                                {form.description.computerName} <br />
                                {form.description.SN} <br />
                                {form.description.domainName}
                              </td>
                              <td className="text-center">{form.unit}</td>
                              <td className="text-center">{form.quantity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="row mt-5">
                        <div className="col-8 pe-5">
                          <strong>Delivered by:</strong>
                          <p className="mt-2 mb-0">Name: {formData.de_name}</p>
                          <p className="mb-0">Rank: {formData.de_rank}</p>
                          <p>Date: {formData.de_date}</p>
                        </div>
                        <div className="col-4">
                          <strong className="pb-3">Received by:</strong>
                          <p className="mt-2 mb-0">Name: {fullName}</p>
                          <p className="mb-0">Rank: DM</p>
                          <p>Date: {formData.re_date}</p>
                        </div>
                      </div>

                      <div className="footer">Copyright © 2024. NNPC</div>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
