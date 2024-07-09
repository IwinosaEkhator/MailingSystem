import React from "react";
import "../Components/Admin/admin.css";

const AdminOrder = (props) => {
    return (
        <>
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>{props.header}</h2>
                    <a href="#" className="btn">View All</a>
                </div>

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
        </>
    );
};

// Set default props for headers
AdminOrder.defaultProps = {
    headers: []
};

export default AdminOrder;