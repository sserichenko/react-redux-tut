import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'


const Posts = ({syncPosts}) => {
    if(!syncPosts.length){
        return (
            <p className="text-left">Постов пока нет!</p>
        )
    }
    return (
        <>
            {
                syncPosts.map((post, index) => <Post key={post.id} index={index} post={post}/>)
            }
        </>
    );
};

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts);