import {
    FETCH_NEWS_INIT,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
    FETCH_NEWSITEM_INIT,
    FETCH_NEWSITEM_SUCCESS,
    FETCH_NEWSITEM_FAILURE,
    SAVE_NEWS_INIT,
    SAVE_NEWS_SUCCESS,
    SAVE_NEWS_FAILURE
     
} from './types'
import API from '../api'

/***  action Creators ***/

// Actions Creators Get All news
export function fetchNewsSuccess (news) {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news
    }
}

export function fetchNewsFailure (error) {
    return {
        type: FETCH_NEWS_FAILURE,
        payload: error
    }
}

// Actions Creators Get single news 
export function fetchNewsItemSuccess (newsItem) {
    return {
        type: FETCH_NEWSITEM_SUCCESS,
        payload: newsItem
    }
}

export function fetchNewsItemFailure (error) {
    return {
        type: FETCH_NEWSITEM_FAILURE,
        payload: error
    }
}

// Actions Creator save news

export function saveNewsSuccess() {
    return {
        type: SAVE_NEWS_SUCCESS
    }
}

export function saveNewsFailure (error) {
    return {
        type: SAVE_NEWS_FAILURE,
        payload: error
    }
}



// Action Creator Get All news (Async)
export function fetchNews() {
    return async (dispatch) => {
        dispatch(() => {
            return {
                type: 'FETCH_NEWS_INIT'
            }
        })

        try {
            const data = await API.news.getAll()
            dispatch(fetchNewsSuccess(data.news))
        } catch(error) {
            dispatch(fetchNewsFailure(error))
        }
    }
}

// Action Creator Get single news (Async)
export function fetchNewsItem (newsId) {
    return async (dispatch) => {
        dispatch(() => {
            return {
                type: 'FETCH_NEWSITEM_INIT'
            }
        })

        try {
            const data = await API.news.getSingle(newsId)
            console.log(data)
            return dispatch(fetchNewsItemSuccess(data.news))
        } catch (error) {
            return dispatch(fetchNewsItemFailure(error))
        }
    }
}

// Action Creator save news (Async)
export function saveNews (news) {
    return async (dispatch) => {
        dispatch(() => {
            return {
                type: SAVE_NEWS_INIT
            }
        })
        try {
            await API.news.save(news)
            return dispatch(saveNewsSuccess())
        } catch (error) {
            return dispatch(saveNewsFailure(error))
        }
    }
}



