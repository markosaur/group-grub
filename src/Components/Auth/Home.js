import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import App.css

export default class extends Component {
    render() {
        return (
            <div>
            <div className = "authorization">
                <div className = "groupGrub">
                    Group Grub
                </div>
                <div className = "buttons">
                    <Link to= '/login' ><button>Login</button></Link>
                    <Link to= '/register' ><button>Register</button></Link>
                </div>
            </div>
    <div className = "pictures">
            <div className = "divOne"></div>
            <div className = "divTwo"></div>
            <div className = "divThree"></div>
    </div>
            </div>
        )
    }
}


