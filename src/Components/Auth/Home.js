import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'

export default class extends Component {
    render() {
        return (
            <div>
                Home
                <Login/>
                <Register/>
            </div>
        )
    }
}
