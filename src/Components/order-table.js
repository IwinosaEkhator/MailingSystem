import React, { Component } from 'react';
import "../Components/Admin/admin.css";

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
        const { idNum, tName, tItems, Actions } = this.props;
        const { status } = this.state;
        const statusClass = status === 'approved' ? 'status approved' : status === 'declined' ? 'status declined' : 'status pending';
        const statusText = status === 'approved' ? 'Approved' : status === 'declined' ? 'Declined' : 'Pending';

        return (
            <>
                <tr>
                    <td>{idNum}</td>
                    <td>{tName}</td>
                    <td>{tItems}</td>
                    <td><span className={statusClass}>{statusText}</span></td>
                    <td>
                        {/* Render the passed Actions component */}
                        {Actions && <Actions onApprove={this.approvedChanges} onDecline={this.declinedChanges} />}
                    </td>
                </tr>
            </>
        )
    }
}

export default Ordertable;