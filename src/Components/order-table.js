import React, { Component } from 'react';

import "../Admin/admin.css";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const TopProducts = (props) => {
    return (
        <>
            <tr>
                <td>{props.pName}</td>
                <td>{props.pSupplier}</td>
                <td>{props.pStocks}</td>
                <td>{props.pAmount}</td>
            </tr>
        </>
    );
}

export const AddedProducts = (props) => {
    return (
        <>
            <tr>
                <td>{props.aName}</td>
                <td>{props.aStocks}</td>
                <td>{props.aSupplier}</td>
            </tr>
        </>
    );
}

export const InventoryProducts = (props) => {
    return (
        <>
            <tr>
                <td>{props.iSn}</td>
                <td>{props.iUPC}<br/>{props.iPName}</td>
                <td>{props.iStocks}</td>
                <td>{props.inbound}</td>
            </tr>
        </>
    );
}

class Ordertable extends Component {

    state = {
        status: 'pending' // initial status
    }

    approvedChanges = () => {
        this.setState({
            status: 'approved'
        });
    }

    declinedChanges = () => {
        this.setState({
            status: 'declined'
        });
        window.alert("Are you sure you want to reject this request");

    }

    render() {
        const { idNum, tName, tItems, tDate } = this.props;
        const { status } = this.state;
        const statusClass = status == 'approved' ? 'status approved' : status == 'declined' ? 'status declined' : 'status pending';
        const statusText = status == 'approved' ? 'Approved' : status == 'declined' ? 'Declined' : 'Pending';

        return (
            <>
                <tr>
                    <td>{idNum}</td>
                    <td>{tName}</td>
                    <td>{tItems}</td>
                    <td>{tDate}</td>
                    <td><span className={statusClass}>{statusText}</span></td>
                    <td>
                        <Link to="/add-form" style={{ fontSize: "22px" }} className="btn"><AiOutlineEdit /></Link>
                        <button style={{ fontSize: "22px" }} className="btn" onClick={this.declinedChanges}><FaXmark /></button>
                        <button style={{ fontSize: "22px" }} className="btn" onClick={this.approvedChanges}><FaCheck /></button>
                    </td>
                </tr>

            </>
        )
    }
}


export default Ordertable;