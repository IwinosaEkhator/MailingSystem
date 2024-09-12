import React, { useState } from "react";
import { FaPlus, FaLaptop, FaKeyboard, FaMouse, FaDesktop, FaInbox, FaHeadphones } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { TbPrinter, TbDeviceLandlinePhone } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import AdminFormComponents from "../Requests.form/adminFormComp";

const InCard = ({ aName, aNum, onClick, children, isOpen, subcategories }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <div className="category-card-main">
        <div>
          <div className="numbers">{aNum}</div>
          <div className="cardName">{aName}</div>
        </div>
        <div className={`dropbtn ${isOpen ? "rotated" : ""}`}>
          <RiArrowDropDownLine />
        </div>
        <div className="iconBx">{children}</div>
      </div>
      {isOpen && (
        <div className={`subcategories ${isOpen ? "open" : ""}`}>
          {subcategories.map((sub, subIndex) => (
            <div key={subIndex} className="subcategory">
              <span>{sub.name}</span>
              <span>{sub.num}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Categories = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [categories, setCategories] = useState([
    {
      name: "Laptop",
      num: 20,
      subcategories: [
        { name: "Dell", num: 5 },
        { name: "HP", num: 15 },
      ],
    },
    {
      name: "Monitor",
      num: 15,
      subcategories: [
        { name: "Samsung", num: 8 },
        { name: "LG", num: 7 },
      ],
    },
    {
      name: "Mouse",
      num: 50,
      subcategories: [
        { name: "Logitech", num: 30 },
        { name: "HP", num: 20 },
      ],
    },
    {
      name: "Keyboard",
      num: 30,
      subcategories: [
        { name: "Mechanical", num: 10 },
        { name: "Membrane", num: 20 },
      ],
    },
    {
      name: "Dock Station",
      num: 10,
      subcategories: [
        { name: "Dell", num: 6 },
        { name: "HP", num: 4 },
      ],
    },
    {
      name: "Desktop",
      num: 25,
      subcategories: [
        { name: "HP", num: 10 },
        { name: "Dell", num: 15 },
      ],
    },
    {
      name: "Printer",
      num: 12,
      subcategories: [
        { name: "Canon", num: 7 },
        { name: "HP", num: 5 },
      ],
    },
    {
      name: "Cisco Telephone",
      num: 18,
      subcategories: [
        { name: "Model A", num: 9 },
        { name: "Model B", num: 9 },
      ],
    },
    {
      name: "Headset",
      num: 40,
      subcategories: [
        { name: "Logitech", num: 20 },
        { name: "Plantronics", num: 20 },
      ],
    },
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [openCategories, setOpenCategories] = useState({});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddCategory = () => {
    if (newCategory) {
      const icon = iconMap[newCategory] || (
        <FaLaptop style={{ fontSize: "3.5rem" }} />
      );
      const newCat = { name: newCategory, num: 0, subcategories: [], icon };
      setCategories([...categories, newCat]);
      setNewCategory("");
      toggleModal();
    }
  };

  const toggleCategory = (index) => {
    setOpenCategories({
      ...openCategories,
      [index]: !openCategories[index],
    });
  };

  const iconMap = {
    Laptop: <FaLaptop style={{ fontSize: "3.5rem" }} />,
    Monitor: <FaDesktop style={{ fontSize: "3.5rem" }} />,
    Mouse: <FaMouse style={{ fontSize: "3.5rem" }} />,
    Keyboard: <FaKeyboard style={{ fontSize: "3.5rem" }} />,
    "Dock Station": <FaInbox style={{ fontSize: "3.5rem" }} />,
    Desktop: <FaComputer style={{ fontSize: "3.5rem" }} />,
    Printer: <TbPrinter style={{ fontSize: "3.5rem" }} />,
    "Cisco Telephone": <TbDeviceLandlinePhone style={{ fontSize: "3.5rem" }} />,
    Headset: <FaHeadphones style={{ fontSize: "3.5rem" }} />,
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
        <span className="d-flex justify-content-between align-items-center">
          <h1 className="catTitle">Categories</h1>{" "}
          <button
            className="py-2 px-5 h-75 m-0 btn rounded bg-white"
            style={{ color: "var(--black1)" }}
            onClick={toggleModal}
          >
            <FaPlus style={{ fontSize: "1.5rem" }} />
          </button>
        </span>
        <div className="catBox">
          {categories.map((category, index) => (
            <div key={index} className="category-wrapper">
              <InCard
                aName={category.name}
                aNum={category.num}
                onClick={() => toggleCategory(index)}
                isOpen={openCategories[index]}
                subcategories={category.subcategories}
              >
                {iconMap[category.name]}
              </InCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Modal = ({
  toggleModal,
  newCategory,
  setNewCategory,
  handleAddCategory,
}) => {
  return (
    <span
      className="modal-box"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#00000030",
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
                fOnChange={(e) => setNewCategory(e.target.value)}
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
  );
};

export default Categories;