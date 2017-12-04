import {
    FETCH_NEWSITEM_INIT,
    FETCH_NEWSITEM_SUCCESS,
    FETCH_NEWSITEM_FAILURE
} from '../actions/types'

import initialState from './initialState'

export default function activeNewsReducer (state = initialState.activeNews, action) {
    switch (action.type) {
        case FETCH_NEWSITEM_INIT:
            return {
                ...state,
                error:null,
                loading:true
            }

        case FETCH_NEWSITEM_SUCCESS:
            return {
                ...state,
                newsItem: action.payload,
                error: null,
                loading: false
            }
        
        case FETCH_NEWSITEM_FAILURE:
            return { 
                ...state,
                newsItem: null,
                error: action.payload,
                loading: false
            }
        
        default:
            return state
    }
}