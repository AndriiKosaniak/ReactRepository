import React, {Component} from 'react';
import {ApiService} from "./ApiService";

class UserSearch extends Component {
    api = new ApiService();
    state = {
        users: [],
        usersForShow: [],
        inputValue: ''
    };

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    search = (e) => {
        e.preventDefault();
        this.setState({inputValue: e.target.value});

        const foundArray = this.state.users.filter(user => user.name.includes(this.state.inputValue));
        if(foundArray.length) {
            this.setState({usersForShow: foundArray})
        } else {
            const foundUserNameArray = this.state.users.filter(user => user.username.includes(this.state.inputValue));
             if(foundUserNameArray.length) {
                 this.setState({usersForShow: foundUserNameArray})
             } else {
                 this.setState({usersForShow: []})
             }
        }
    };

    render() {
        return (
            <div>
                { this.state.users && <input type="text" value={this.state.inputValue} onChange={this.search}/> ||
                <p>Wait for users!...</p>
                }

                <div>
                    { this.state.usersForShow && this.state.usersForShow.map(user => {
                        return (
                            <div key={user.id}>
                                <p>{user.name}</p>
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                                <hr/>
                            </div>
                        )})
                    }
                </div>
            </div>
        );
    }
}

export default UserSearch;
