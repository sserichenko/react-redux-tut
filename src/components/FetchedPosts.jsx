import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchPosts} from "../redux/actions"
import Post from "./Post"
import Loader from "./Loader"

const FetchedPosts = () => {
    const dispatch = useDispatch();
    const {fetchedPosts} = useSelector((state) => state.posts)
    const loading = useSelector(state => state.app.loading)
    const getAsyncPostsHandler = () => {
        dispatch(fetchPosts());
    }

    if(loading){
        return (
            <Loader />
        )
    }

    if(!fetchedPosts.length){
        return (
            <button onClick={getAsyncPostsHandler} className="btn btn-primary">Загрузить</button>
        )
    }
    return (
        <>
            {
                fetchedPosts.map((post, index) => <Post key={post.id} index={index} post={post}/>)
            }
        </>
    );
};

export default FetchedPosts;