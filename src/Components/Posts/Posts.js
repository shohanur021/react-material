import React, { useState, useEffect } from 'react';
import PostShow from './PostShow/PostShow';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <div>
            <h1>Posts: {posts.length}</h1>
            {
                posts.map(post => <PostShow key={post.id} post={post}></PostShow>)
            }

        </div>
    );
};

export default Posts;