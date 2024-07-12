import React, { Component } from 'react';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

class Requesttable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: true,
            SN: props.tDescription.SN,
            domainName: props.tDescription.domainName,
            computerName: props.tDescription.computerName,
            unit: props.tUnit,
            quantity: props.tQuantity,
            isCollapsed: true,
        };
    }

    handleEditClick = () => {
        const { isEditing } = this.state;

        if (isEditing) {
            const updatedDescription = {
                SN: this.state.SN,
                domainName: this.state.domainName,
                computerName: this.state.computerName,
            };

            this.props.handleUpdateDescription(this.props.tKey, updatedDescription, this.state.unit, this.state.quantity);
        }

        this.setState({ isEditing: !isEditing });
    };


    toggleCollapse = () => {
        this.setState((prevState) => ({ isCollapsed: !prevState.isCollapsed }));
    };

    render() {
        const { tItem, removeForm } = this.props;
        const { isEditing, SN, domainName, computerName, unit, quantity, isCollapsed } = this.state;

        return (
            <tr>
                <td>{tItem}</td>
                <td>
                    {isEditing ? (
                        <div>
                            <div className='d-flex justify-space-between align-items-center'>
                                <input
                                    type="text"
                                    placeholder="Item name"
                                    value={computerName}
                                    onChange={(e) => this.setState({ computerName: e.target.value })}
                                />
                                <button className='btn' type="button" onClick={this.toggleCollapse}>
                                    {isCollapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                </button>
                            </div>

                            {!isCollapsed && (
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter S/N"
                                        value={SN}
                                        onChange={(e) => this.setState({ SN: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter Domain Name"
                                        value={domainName}
                                        onChange={(e) => this.setState({ domainName: e.target.value })}
                                    />
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className=''>
                            <span className='d-flex justify-space-between align-items-center'>
                                <p>{computerName}</p>
                                <button className='btn me-auto' type="button" onClick={this.toggleCollapse}>
                                    {isCollapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                </button>
                            </span>

                            {!isCollapsed && (
                                <div>
                                    <p>SN: {SN}</p>
                                    <p>Domain Name: {domainName}</p>
                                </div>
                            )}
                        </div>
                    )}
                </td>
                <td>
                    {isEditing ? (
                        <input
                            className='w-100'
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
                            className='w-100'
                            type="number"
                            placeholder="Enter Quantity"
                            value={quantity}
                            onChange={(e) => this.setState({ quantity: e.target.value })}
                        />
                    ) : (
                        <p>{quantity}</p>
                    )}
                </td>
                <td className='d-flex justify-content-end'>
                    <button className="btn" onClick={this.handleEditClick} style={{ fontSize: '22px' }}>
                        {isEditing ? <AiOutlineCheck /> : <AiOutlineEdit />}
                    </button>

                    <button className="btn" onClick={() => removeForm(this.props.tKey)} style={{ fontSize: '22px' }}>
                        <AiOutlineClose />
                    </button>
                </td>
            </tr>
        );
    }
}

export default Requesttable;