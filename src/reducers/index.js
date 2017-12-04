import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import newsList from './newsListReducer'
import activeNews from './activeNewsReducer'

const rootReducer = combineReducers({
        routing: routerReducer,
        newsList,
        activeNews
    })

export default rootReducer