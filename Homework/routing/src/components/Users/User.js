import React, {Component} from 'react';

class User extends Component {
    render() {
        let {id, name, username, email} = this.props.data;
        return (
            <div>
                {id} - {username}
                <br/>
                {name} - {email}
            </div>
        );
    }
}

export default User;
