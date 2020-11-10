import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {id, title, body} = this.props.data;
        return (
            <div>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
            </div>
        );
    }
}

export default Post;
