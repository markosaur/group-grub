import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class MyGroups extends Component {
    constructor(){
        super();
        this.state = {
            userGroups: []
        };
    }

    async componentDidMount() {
        const myGroups = await axios.get('/api/groups/user')
        this.setState({
            userGroups: myGroups.data
        })
    }
    
    // componentDidMount() {
    //     axios.get('/api/groups/user').then(res => {
    //         this.setState({ userGroups: res.data })
    //     })
    // }



    render() {

        const mappedUserGroups = this.state.userGroups.map(group => {
            return (
                <div key = {group.groups_id}>
                    
                    <Link to={`/orders/${group.groups_id}`}>
                        <div>
                            <h1>{group.groups_name}</h1>
                        </div>
                    </Link>
                </div>
            )
        })

        return (
            <div>
               {mappedUserGroups}
            </div>
        )
    }
}
