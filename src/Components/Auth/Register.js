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
                <div className="registerHeader">
                    <div className="register">
                        Registration
                    </div>
                </div>

                <div className = "inputContainer">
                <div className = "inputBoxes">
                
                <div className = "input">
                <input
                placeholder="username"
                onChange = {e => this.handleChange(e, 'username')}
                type = 'text'
                placeholder = 'Username'
                />
                </div>
                
                
                <div className = "input">
                <input
                placeholder="password"
                onChange = {e => this.handleChange(e, 'password')}
                type = 'password'
                placeholder = 'Password'
                />

                </div>

                <div className = "buttonsContainer">
                <button onClick={() => this.register()}>Register</button>
                <Link to= '/'><button>Cancel</button></Link>
                </div>
                </div>
                </div>



            </div>
        )
    }
}

export default connect(null, {updateUser})(Register)
