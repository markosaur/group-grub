import React, { Component } from 'react'
import axios from 'axios'

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
    }

    register() {
        const {groups_name, date, deadline} = this.state
        console.log(groups_name, date, deadline)
        if(groups_name==='' || date==='' || deadline===''){
            return alert ('Please fill in all input boxes')
        }
        axios.post('/api/group', {groups_name, date, deadline}).then(() => {

        })
    }


    render() {
        return (
            <div>
                Create
            </div>
        )
    }
}
