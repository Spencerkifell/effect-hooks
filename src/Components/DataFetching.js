// @ts-nocheck
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then((response) => {
                console.log(response);
                setPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [idFromButtonClick]) //So it knows that id is a dependency

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <p>{post.title}</p>
            {/* <ul>
                {posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul> */}
        </div>
    )
}

export default DataFetching
