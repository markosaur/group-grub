import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { updateUser } from '../redux/reducer'
import { connect } from 'react-redux'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    logout = async () => {
        const res = await axios.delete('/auth/logout')
        this.props.updateUser(null)
        //need to fix the res, add an alert here!
    }

    render() {
        return (
            
            <div>
                Navigation
                <Link to='/'><button onClick={this.logout} >Logout</button></Link>
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
  )(Nav)