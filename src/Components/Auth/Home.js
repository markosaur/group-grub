import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import App.css

export default class extends Component {
    render() {
        return (
            <div className = "authorization">
                <div className = "header">
                Home
                </div>

                <Link to= '/login' ><button>Login</button></Link>
                <Link to= '/register' ><button>Register</button></Link>
            </div>
        )
    }
}
