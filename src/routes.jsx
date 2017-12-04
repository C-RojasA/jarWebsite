import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './containers/Home'
import MisionVision from './containers/MisionVision'
import History from './containers/History'
import News from './containers/News'
import Detail from './containers/NewsDetailContainer'
import NewsAdd from './containers/NewsAdd'
import Careers from './containers/Careers'
import Academies from './containers/Academies'

export default (
    <switch>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="misionVision" component={MisionVision} />
            <Route path="history" component={History} />
            <Route path="news" component={News} />
            <Route path="newsadd" component={NewsAdd} />
            <Route path="careers" component={Careers} />
            <Route path="detail/:newsId" component={Detail} />
            <Route path="academies" component={Academies} />
        </Route>   
    </switch> 
)