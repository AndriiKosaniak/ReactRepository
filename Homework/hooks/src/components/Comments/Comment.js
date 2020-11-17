import React from "react";

function Comment({comment}){
    return(
        <div>
            {comment.name} - {comment.email}
            <br/>
            {comment.body}
        </div>
    )
}
export default Comment
