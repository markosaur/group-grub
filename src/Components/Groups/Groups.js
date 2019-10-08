import React, { Component } from 'react'
import MyGroups from './MyGroups'
import {Link} from 'react-router-dom'

export default class extends Component {
    render() {
        return (
            <div>
                Groups
                <MyGroups/>
                <Link to = '/create' ><button>Create Group</button></Link>
            </div>
        )
    }
}
