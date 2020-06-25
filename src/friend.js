import React, { Component } from 'react';
import { connect } from 'react-redux';

class Friend extends Component {
    handleRemove = async () => {
        let { dispatch } = this.props;
        await dispatch({ type: 'REMOVE_FRIEND', index: this.props.index });
    }

    render() {
        return (
            <div>
                <div><b>Name: </b>{this.props.name}</div>
                <div><b>Email: </b>{this.props.email}</div>
                <div><b>Phone Number: </b>{this.props.phone}</div>
                <div className="pt-2">
                    <button className="btn btn-danger" onClick={() => this.handleRemove()}>Remove</button>
                </div>
                <br/>
            </div>
        )
    }
}

export default connect((store) => {
    return {
        friendList: store.list
    }
})(Friend);