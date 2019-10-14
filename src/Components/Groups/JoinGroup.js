import React, { Component } from 'react'

export default class JoinGroup extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.group.groups_name}</h1>
                <h1>{this.props.group.groups_id}</h1>
                {/* <h1>{this.props.group.date}</h1>
                <h1>{this.props.group.deadline}</h1> */}
                {/* <h1>{this.props.group.username}</h1> */}
            </div>
        )
    }
}
