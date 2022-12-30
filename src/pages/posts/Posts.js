import React, { useState } from 'react'
import getPost from '../../api/posts/getPost';
import Heading from '../../components/heading/heading';

const Posts = () => {
    const [post, setPost] = useState({});

    const onClickhandler = () => {
        getPost()
            .then((data) => {
                setPost(data.data);
            })
            .catch((err) => console.log(err))
            ;
    }

    return (
        <div>
            <Heading title="POSTS API Component" type="h1" />
            <button onClick={onClickhandler}>Click Me Prashant</button>
            <p>{post.title}</p>
            <hr />
        </div>
    )
}

export default Posts