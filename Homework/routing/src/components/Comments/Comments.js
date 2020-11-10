import React, {Component} from 'react';
import {ApiService} from "../ApiService";
import Comment from "./Comment";

class Comments extends Component {
    api = new ApiService();
    state = {
        comments: []
    };

    async componentDidMount() {
        this.setState({comments: await this.api.getComments()});
    }
    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment => (<Comment data={comment} key={comment.id}/>))
                }
            </div>
        );
    }
}

export default Comments;
