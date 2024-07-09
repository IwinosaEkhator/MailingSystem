import React from 'react';
import "../Components/Admin/admin.css";

const Resquestorder = (props) => {
    return (
        <div className="recentOrders">
            <div className="cardHeader">
                <h2>Request Form</h2>
                <a href="#" className="btn" onClick={props.addForm}>+</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Description Of Materials/Services</td>
                        <td>Unit</td>
                        <td>Quantity</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    );
};

export default Resquestorder;
