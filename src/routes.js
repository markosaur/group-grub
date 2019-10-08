import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Components/Auth/Home'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Groups from './Components/Groups/Groups'
import Available from './Components/Groups/Available'
import Crerate from './Components/Groups/Crerate'
import MyGroups from './Components/Groups/MyGroups'
import Orders from './Components/Orders/Orders'

export default (
    <Switch>
        <Route exact path = '/' component={Home} />
        <Route path = '/login' component={Login} />
        <Route path = '/register' component = {Register} />
        <Route path = '/groups' component = {Groups} />
        <Route path = '/available' component = {Available} />
        <Route path = '/creator' component = {Crerate} />
        <Route path = '/mygroups' component = {MyGroups} />
        <Route path = '/orders/:id' component = {Orders} />
    </Switch>
)