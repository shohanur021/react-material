import React, { useState, useEffect } from 'react';
import './Comments.css';


const Comments = (props) => {
    const id = props.id;
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div className="p-10">
            <h4>comments of post {id}</h4>
            {
                comments.map(comment => {
                    return (
                        <div className="comment_box">
                            <div className="d-flex">
                                <div><img src={props.img} className="comments_img" alt="" /></div>
                                <div className="ml-5 mb-5"><h5><span>Name</span> : {comment.name}</h5></div>
                            </div>
                            <div>
                                <small>{comment.body}</small>
                            </div>

                        </div>
                    );
                })
            }
        </div>
    );
};

export default Comments;