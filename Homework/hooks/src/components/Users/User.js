import React from 'react'

function User({user}){

console.log(user);
    return(
        <div>
            {user.name} - {user.id}
            <br/>
            {user.email}
            <hr/>
        </div>
    )
}
export default User;
