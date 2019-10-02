import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div>
                Login
                <h3><input placeholder="username"/></h3>
                <h3><input placeholder="password"/></h3>
                <button>Enter</button>
                <Link to= '/'><button>Cancel</button></Link>
            </div>
        )
    }
}
