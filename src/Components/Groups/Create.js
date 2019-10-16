import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Crerate extends Component {
    constructor(){
        super()
        this.state = {
            groups_name: '',
            date: '',
            deadline: ''
        }
        
    }

    handleChange = async(e, key) => {
        this.setState({
            [key]: e.target.value
        })
        console.log(this.state)
    }

    create() {
        const {groups_name, date, deadline} = this.state
        console.log(groups_name, date, deadline)
        if(groups_name==='' || date==='' || deadline===''){
            return alert ('Please fill in all input boxes')
        }
        axios.post('/api/group', {groups_name, date, deadline}).then(() => {
            this.props.history.push('/groups')
        })
    }


    render() {
        return (
            <div>
                <div className="createHeader">
                    Create A Group
                </div>


                <div className = "containerContainer">
                <div className="containerTwo">
                
                <div className="inputBoxesTwo">
                
                <div className="inputs">
                <input
                value = {this.state.groups_name}
                onChange={e => this.handleChange(e, 'groups_name')}
                type='text'
                placeholder = 'group name'
                />
                </div>
                
                <div className="inputs">
                <input
                value = {this.state.date}
                onChange={e => this.handleChange(e, 'date')}
                type='text'
                placeholder = 'date'
                />
                </div>
                
                <div className="inputs">
                <input
                value = {this.state.deadline}
                onChange={e => this.handleChange(e, 'deadline')}
                type='text'
                placeholder = 'deadline'
                />
                </div>

                </div>
                </div>
                </div>

            <div className="btnContain">
            <Link to = '/groups'>
            <button onClick={() => this.create()}>Create</button>
            </Link>
            <Link to = '/groups'>
            <button>Back</button>
            </Link></div>
            </div>
        )
    }
}
