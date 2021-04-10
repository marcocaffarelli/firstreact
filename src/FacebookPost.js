import React from 'react';

function Post(props) {
    // console.log(props);
    return (
        <div className="Post">
            <h2>{props.author}</h2>
            <h4>{props.description}</h4>
        </div>

    )
}

export default Post;