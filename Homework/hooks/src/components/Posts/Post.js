import React from "react";

function Post({post}){
    return(
        <div>
            {post.title}
            <br/>
            {post.body}
            <hr/>
        </div>

    )
}
export default Post;
