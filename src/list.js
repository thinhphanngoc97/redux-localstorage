import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friend from './friend';
import { reactLocalStorage } from 'reactjs-localstorage';

class FriendList extends Component {
    async componentDidMount() {
        if ((this.props.friendList.length === 0) && (reactLocalStorage.getObject('friendList').list !== undefined)) {
            let { dispatch } = this.props;
            await dispatch({ type: 'INIT_DATA', data: reactLocalStorage.getObject('friendList').list });
        };
        reactLocalStorage.setObject('friendList', {list: this.props.friendList});
    }

    componentDidUpdate() {
        reactLocalStorage.setObject('friendList', {list: this.props.friendList});
    }
    
    render() {
        return (
            <div className="container pt-5">
                {      
                    this.props.friendList.map((friend, index) => {
                        return <Friend key={index} index={index} name={friend.name} email={friend.email} phone={friend.phone} />
                    })
                }
            </div>
        )
    }
}

export default connect((store) => {
    return {
        friendList: store.list
    }
})(FriendList);