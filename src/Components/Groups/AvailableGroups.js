import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export default class Available extends Component {
    constructor(){
        super();
        this.state = {
            groups: []
        };
    }

async componentDidMount() {
    const id = this.props.user.userId
    const groups = await axios.get(`/api/groups/${id}`)
    this.setState({
        groups: groups.data
    })
}

    render() {

        console.log(this.state)
        const mappedGroups = this.state.groups.map((group, i) => {
            console.log(group)
            return
            
        })

        return (
            <div>
                Available
                <Link to = '/groups'>
                    <button>Return to Groups</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state
    return { user }
}

export default connect(
    mapStateToProps
    )(AvailableGroups)