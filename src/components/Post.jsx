import React from 'react';

const Post = ({post, index}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ index + 1 }. {post.title}</h5>
            </div>
        </div>
    );
};

export default Post;