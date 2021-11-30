import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { REQUEST_POSTS, FETCH_POSTS } from './types'
import {showLoader, hideLoader, showAlert} from "./actions"

export function* sagaWatcher(){
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker(){
    try{
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put ({type: FETCH_POSTS, payload: payload})
        yield put(hideLoader())
    }catch(e){
        yield put(showAlert(e.message))
        yield put(hideLoader())
    }
    
}

async function fetchPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    return await response.json()
}