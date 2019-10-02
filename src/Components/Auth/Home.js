import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class extends Component {
    render() {
        return (
            <div>
                Home
                <Link to= '/login' ><button>Login</button></Link>
                <Link to= '/register' ><button>Register</button></Link>
            </div>
        )
    }
}
