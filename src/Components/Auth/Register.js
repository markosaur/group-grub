import React, { Component } from 'react'
import axios from 'axios'
// import swal from 'sweetalert2'
import {updateUser} from '../../redux/reducer'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key] : e.target.value
        })
    }

    register() {
        const {username, password} = this.state
        console.log(username, password)
        if(username==='' || password===''){
            return alert('Please fill in all input boxes' )
        }
        axios.post('/auth/register', {username, password})
        .then((res)=> {
            this.props.updateUser(res.data.user)
            this.props.history.push('/groups')
        })        
    }



    render() {
        return (
            <div>
                Register
                <h3>
                    <input 
                    placeholder="username"
                    onChange = {e => this.handleChange(e, 'username')}
                    type = 'text'
                    placeholder = 'Username'
                    />
                </h3>
                <h3>
                    <input 
                    placeholder="password"
                    onChange = {e => this.handleChange(e, 'password')}
                    type = 'password'
                    placeholder = 'Password'
                    />
                </h3>
                <button onClick={() => this.register()}>Welcome to the Food life</button>
                <Link to= '/'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default connect(null, {updateUser})(Register)
