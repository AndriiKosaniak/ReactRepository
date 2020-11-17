import {useState, useEffect} from 'react'
import React from 'react'
import User from "./User";

function Users(){
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    }, []);

    return(
        <div>
        {
            users.map(user => <User user={user} key={user.id}/>)
        }
        </div>
    )
}
export default Users;
