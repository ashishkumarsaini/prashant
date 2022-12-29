import React, { useState } from 'react'
import getPost from '../../api/posts/getPost';

const Posts = () => {
    const [post, setPost] = useState({});

    const onClickhandler = () => {
        getPost()
            .then((data) => {
                console.log(data.data)
                setPost(data.data);
            })
            .catch((err) => console.log(err))
            ;
    }

    return (
        <div>
            <button onClick={onClickhandler}>Click Me Ashish</button>
            <p>{post.title}</p>
            <hr />
        </div>
    )
}

export default Posts