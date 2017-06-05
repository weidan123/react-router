import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'

//解决移动端300毫秒延迟
var FastClick = require('fastclick')
FastClick.attach(document.body)

import './static/css/common.less'
import './static/css/font.css'

import RouteMap from './router/routeMap'

render(
    <HashRouter basename="/">
        <RouteMap />
    </HashRouter>
    ,document.body.appendChild(document.createElement('div'))
)