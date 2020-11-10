import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {id, name, email, body} = this.props.data;
        return (
            <div>
                <p>{id}</p>
                <p>{name}</p>
                <p>{email}</p>
                <p>{body}</p>
            </div>
        );
    }
}

export default Comment;
