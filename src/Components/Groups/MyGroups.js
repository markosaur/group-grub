import React, { Component } from 'react'
import axios from 'axios';

export default class MyGroups extends Component {
    constructor(){
        super();
        this.state = {
            userGroups: []
        };
    }

    componentDidMount() {
        axios.get('/api/groups/user').then(res => {
            this.setState({ userGroups: res.data })
        })
    }



    render() {

        const mappedUserGroups = this.state.userGroups.map((group, i) => {
            return ()
        })

        return (
            <div>
               My Groups
            </div>
        )
    }
}
