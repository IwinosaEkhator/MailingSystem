import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../../Components/admin-card";
import { FaPlus, FaLaptop, FaKeyboard } from "react-icons/fa";
import { FaMouse } from "react-icons/fa";
import AdminFormComponents from "../Requests.form/adminFormComp";

const Categories = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [categories, setCategories] = useState([
    { name: "Laptop", num: 20, link: "/requests" },
    { name: "Mouse", num: 50, link: "/pending" },
    { name: "Keyboard", num: 30, link: "/approved" },
  ]);
  const [newCategory, setNewCategory] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddCategory = () => {
    console.log("Adding category:", newCategory); // Debug log
    if (newCategory) {
      const icon = iconMap[newCategory] || <FaLaptop style={{ fontSize: "3.5rem" }} />;
      const newCat = { name: newCategory, num: 0, link: "/", icon };
      setCategories([...categories, newCat]);
      setNewCategory("");
      toggleModal();
    }
  };

  const iconMap = {
    Laptop: <FaLaptop style={{ fontSize: "3.5rem" }} />,
    Mouse: <FaMouse style={{ fontSize: "3.5rem" }} />,
    Keyboard: <FaKeyboard style={{ fontSize: "3.5rem" }} />,
    // Add more mappings as needed for additional categories
  };

  return (
    <>
      <div className="main-inside px-3">
        {isModalVisible && (
          <Modal 
            toggleModal={toggleModal} 
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            handleAddCategory={handleAddCategory}
          />
        )}
        <h1 className="catTitle">Categories</h1>
        <div className="catBox">
          {categories.map((category, index) => (
            <Card key={index} aName={category.name} aNum={category.num} aLink={category.link}>
              {iconMap[category.name]}
            </Card>
          ))}
          <Link
            className="d-flex justify-content-center align-items-center"
            onClick={toggleModal}
          >
            <div>
              <FaPlus style={{ fontSize: "27px", fontSize: "3.5rem" }} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

const Modal = ({ toggleModal, newCategory, setNewCategory, handleAddCategory }) => {
  const iconMap = {
    Laptop: <FaLaptop style={{ fontSize: "3.5rem" }} />,
    Mouse: <FaMouse style={{ fontSize: "3.5rem" }} />,
    Keyboard: <FaKeyboard style={{ fontSize: "3.5rem" }} />,
    // Add more mappings as needed for additional categories
  };

  return (
    <>
      <span
        className="modal-box"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#00000030", // Reduced opacity
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <div
          className="modal modal-sheet position-absolute d-block px-4"
          tabIndex="-1"
          role="dialog"
          id="modalSheet"
          style={{ height: "auto", top: "35%", left: "5%" }}
        >
          <div className="modal-dialog my-0" role="document">
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header border-bottom mb-3">
                <h1 className="modal-title fs-5">ADD NEW CATEGORY</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-0">
                <AdminFormComponents
                  fPlaceholder="Category Name"
                  fElement="Cname"
                  fType="text"
                  fValue={newCategory}
                  fOnChange={(e) => {
                    setNewCategory(e.target.value);
                  }}
                />
              </div>
              <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                <button
                  type="button"
                  className="btn btn-lg"
                  style={{
                    background: "var(--green)",
                    color: "var(--text-color)",
                  }}
                  onClick={handleAddCategory}
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      </span>
    </>
  );
};

export default Categories;