import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class JoinGroup extends Component {
    

    joinGroup() {
        const groups_id = this.props.group.groups_id
        const users_id = this.props.users_id
        axios.post('/api/joingroup', {groups_id, users_id}).then((result)=>{
            this.props.handleAddedGroup(result.data)
        
        })
    }

    render() {

        return (
            <div>
                <div className="possibles">
                    <h1>{this.props.group.groups_name}</h1>
                    <h1>{this.props.group.groups_id}</h1>
                </div>
                <Link to = {`/orders/${this.props.group.groups_id}`}>
                    <button onClick={() => this.joinGroup()}>Join</button>
                </Link>
            </div>
        )
    }
}
