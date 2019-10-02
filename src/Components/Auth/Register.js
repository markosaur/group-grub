import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div>
                Register
                <h3><input placeholder="username"/></h3>
                <h3><input placeholder="password"/></h3>
                <button>Welcome to the Food life</button>
                <Link to= '/'><button>Cancel</button></Link>
            </div>
        )
    }
}
