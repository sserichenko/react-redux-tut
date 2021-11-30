import {CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, REQUEST_POSTS} from "./types"
export const createPost = (post) => {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text){
    return dispatch => {
        dispatch({
        type: SHOW_ALERT,
        payload: text
    })
    setTimeout(() => {
        dispatch(hideAlert())
    }, 3000 )
    } 
}

export function hideAlert(){
    return {
        type: HIDE_ALERT
    }
}

// -------------FETCH WITH REDUX-THUNK

// export function fetchPosts(){
//     return async dispatch => {
//         try{
//             dispatch(showLoader())
//             const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
//             const json = await response.json()
//             dispatch({type: FETCH_POSTS, payload: json})
//             dispatch(hideLoader())
//         }catch(err){
//             dispatch(showAlert(err.message || "Что-то пошло не так"))
//             dispatch(hideLoader())
//         }
        
//     }
// }

// -------------FETCH WITH REDUX SAGA

export function fetchPosts(){
    return {
        type: REQUEST_POSTS
    }
}