import React, { useState } from "react";
import optionLogin1 from "../../../../Components/Assets/login1.png";
import optionLogin2 from "../../../../Components/Assets/login2.png";

function GeneralOptions() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="">
        <div className="row branding">
          <div className="col-5">
            <h3>Branding</h3>
            <p>
              Customization options to change the branding of the Login Page,
              Admin Web interface, and User web interface.
            </p>
          </div>
          <div className="col-7 ps-3">
            <h5 className="mb-3">Login page</h5>
            <div className="brand-option d-flex">
              <img src={optionLogin1} alt="" className="w-50" />
              <div
                className="ps-2"
                style={{
                  boxShadow: "0 7px 25px rgba(0, 0, 0, 0.08)",
                  width: "100%",
                }}
              >
                <form action="" className="mt-5 px-2">
                  <span className="brand-numbering">1</span>
                  <div className="mb-4">
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Selected Logo"
                        className="w-50 mt-3 me-2 border p-2"
                      />
                    )}
                    <input
                      type="file"
                      id="logoUpload"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                    <label htmlFor="logoUpload" className="custom-button mb-5">
                      Upload Logo
                    </label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="instruction" className="fw-bolder mb-2">
                      <span className="brand-numbering me-2">2</span>{" "}
                      Instruction
                    </label>
                    <textarea
                      id="instruction"
                      rows="3"
                      className="form-control"
                      style={{ width: "97%" }}
                    ></textarea>
                    <p
                      className="text-secondary mt-1"
                      style={{ fontSize: "14px" }}
                    >
                      (maximum of 1,000 characters)
                    </p>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="brand-color" className="fw-bolder mb-2">
                      <span className="brand-numbering me-2">3</span> Button
                      Color
                    </label>
                    <input
                      type="text"
                      id="brand-color"
                      className="w-50 form-control"
                    />
                    <p
                      className="text-secondary mt-1"
                      style={{ fontSize: "14px" }}
                    >
                      (E.g. Green or #00ae5b)
                    </p>
                  </div>

                  <p
                    href=""
                    style={{ color: "var(--green)", marginTop: "50px" }}
                  >
                    Reset to default
                  </p>
                </form>
              </div>
            </div>

            <div className="mt-5">
              <h5 className="mb-3">Login page (image)</h5>
              <div className="brand-option">
                <img src={optionLogin2} alt="" className="w-100" />
                <div>
                  <form action="">
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="imageUpload" className="custom-button">
                      Upload Image
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralOptions;
