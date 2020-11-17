import React, {useEffect, useState} from 'react'
import Post from "./Post";

function Posts(){
    let [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            })
    }, [])

    return(
        <div>
            {
                posts.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
    )
}
export default Posts;
