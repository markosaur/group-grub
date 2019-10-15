import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {updateUser} from '../../redux/reducer'
import { connect } from 'react-redux'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange (e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    login = async () => {
        const {username, password} = this.state
        const res = await axios.post('/auth/login', {username, password})
        if (res.data.user) {
            this.props.updateUser(res.data.user)
            this.props.history.push('/groups')
            console.log(this.props.history)
        }else{
        alert('You have entered an invalid username or password')
        }
    }
    render() {
        return (
            <div>
                <div className="loginHeader">
                    <div className="login">
                        Login
                    </div>
                </div>
                
                <input placeholder="username"
                    onChange = {e => this.handleChange(e, 'username')}
                    type = 'text'
                    placeholder = 'Username'
                    />
                
                
                <input 
                    placeholder="password"
                    onChange = {e => this.handleChange(e, 'password')}
                    type = 'password'
                    placeholder = 'Password'
                    />
                
                <button onClick={this.login}>Enter</button>
                <Link to= '/'><button>Cancel</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state
    return { user }
  }
  
  export default connect(
    mapStateToProps,
    { updateUser }
  )(Login)
