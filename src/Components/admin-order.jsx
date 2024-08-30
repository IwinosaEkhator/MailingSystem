import React from "react";
import "../Admin/admin.css";
import { Link } from "react-router-dom";

const AdminOrder = (props) => {
    return (
        <>
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>{props.header}</h2>
                    {props.hName ? (
                        <Link className="btn" to={props.hLink}>{props.hName}</Link>
                    ) : null}
                </div>

                <div className="scrollable-table">
                    <table>
                        <thead>
                            <tr>
                                {props.headers.map((header, index) => (
                                    <td key={index}>{header}</td>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

// Set default props for headers
AdminOrder.defaultProps = {
    headers: []
};

export default AdminOrder;