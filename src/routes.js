import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Components/Auth/Home'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Groups from './Components/Groups/Groups'
import AvailableGroups from './Components/Groups/AvailableGroups'
import Create from './Components/Groups/Create'
import MyGroups from './Components/Groups/MyGroups'
import Orders from './Components/Orders/Orders'

export default (
    <Switch>
        <Route exact path = '/' component={Home} />
        <Route path = '/login' component={Login} />
        <Route path = '/register' component = {Register} />
        <Route path = '/groups' component = {Groups} />
        <Route path = '/availablegroups' component = {AvailableGroups} />
        <Route path = '/create' component = {Create} />
        <Route path = '/mygroups' component = {MyGroups} />
        <Route path = '/orders/:id' component = {Orders} />
    </Switch>
)