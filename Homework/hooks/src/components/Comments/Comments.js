import React, {useEffect, useState} from "react";
import Comment from "./Comment";

function Comments(){
    let [comments, setComments] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value)
            })
    }, [])

    return(
        <div>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    )
}
export default Comments;
