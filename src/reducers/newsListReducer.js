import {
    FETCH_NEWS_INIT,
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_SUCCESS,
} from '../actions/types'

import initialState from './initialState'

export default function newsListReducer (state = initialState.newsList, action) {
    switch (action.type) {
        
        case FETCH_NEWS_INIT:
            return {
                ...state,
                loading: true,
                error : null
            }
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                news: [],
                error: action.payload,
                loading: false
            }
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                news: action.payload,
                error: null,
                loading:false
            }
        default:
            return state
    }
}
