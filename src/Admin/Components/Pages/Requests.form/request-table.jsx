import React, { Component } from "react";
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

class Requesttable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true, // Start with editing mode
      serial_number: props.tSerialNumber,
      domain_name: props.tDomainName,
      item_name: props.tItemName,
      unit: props.tUnit,
      quantity: props.tQuantity,
      isCollapsed: true, // Control the visibility of additional inputs (like serial_number and domain_name)
    };
  }

  handleEditClick = (e) => {
    e.preventDefault(); // Prevent any default behavior that might cause submission

    const { isEditing } = this.state;

    if (isEditing) {
      // const updatedDescription = {
      //   serial_number: this.state.serial_number,
      //   domain_name: this.state.domain_name,
      //   item_name: this.state.item_name,
      // };

      this.props.handleUpdateDescription(
        this.props.tKey,
        this.state.serial_number,
        this.state.domain_name,
        this.state.item_name,
        this.state.unit,
        this.state.quantity
      );
    }

    this.setState({ isEditing: !isEditing }); // Toggle edit state without triggering navigation
  };

  toggleCollapse = () => {
    this.setState((prevState) => ({ isCollapsed: !prevState.isCollapsed }));
  };

  render() {
    const { tItem, removeForm } = this.props;
    const {
      isEditing,
      serial_number,
      domain_name,
      item_name,
      unit,
      quantity,
      isCollapsed,
    } = this.state;

    return (
      <tr>
        <td>{tItem}</td>
        <td>
          {isEditing ? (
            <div>
              {/* Editing Mode */}
              <div className="d-flex justify-space-between align-items-center">
                <input
                  type="text"
                  placeholder="Item name"
                  value={item_name}
                  onChange={(e) =>
                    this.setState({ item_name: e.target.value })
                  }
                />
                <button
                  className="btn"
                  type="button"
                  onClick={this.toggleCollapse}
                >
                  {isCollapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </button>
              </div>

              {!isCollapsed && (
                <div>
                  <input
                    type="text"
                    placeholder="Enter S/N"
                    value={serial_number}
                    onChange={(e) => this.setState({ serial_number: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Enter Domain Name"
                    value={domain_name}
                    onChange={(e) =>
                      this.setState({ domain_name: e.target.value })
                    }
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="">
              {/* View Mode */}
              <span className="d-flex justify-space-between align-items-center">
                <p>{item_name}</p>
                <button
                  className="btn me-auto"
                  type="button"
                  onClick={this.toggleCollapse}
                >
                  {isCollapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </button>
              </span>

              {!isCollapsed && (
                <div>
                  <p>Serial Number: {serial_number}</p>
                  <p>Domain Name: {domain_name}</p>
                </div>
              )}
            </div>
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              className="w-100"
              type="number"
              placeholder="Enter Unit"
              value={unit}
              onChange={(e) => this.setState({ unit: e.target.value })}
            />
          ) : (
            <p>{unit}</p>
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              className="w-100"
              type="number"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => this.setState({ quantity: e.target.value })}
            />
          ) : (
            <p>{quantity}</p>
          )}
        </td>
        <td className="d-flex justify-content-end">
          <button
            className="btn"
            onClick={this.handleEditClick}
            style={{ fontSize: "22px" }}
          >
            {/* Show Check or Edit Icon based on editing state */}
            {isEditing ? <AiOutlineCheck /> : <AiOutlineEdit />}
          </button>

          <button
            className="btn"
            onClick={() => removeForm(this.props.tKey)}
            style={{ fontSize: "22px" }}
          >
            <AiOutlineClose />
          </button>
        </td>
      </tr>
    );
  }
}

export default Requesttable;
