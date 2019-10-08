import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Orders extends Component {
    constructor(){
        super();
        this.state = {
            groobies: []
        };
    }

    async componentDidMount(){
        const group = await axios.get(`/api/group/${this.props.match.params.id}`)
        this.setState({
            groobies: group.data
        })
    }

    render() {

        const mappedGrub = this.state.groobies.map(grub => {
            return (
                <div>
                    <h1>{grub.username}</h1>
                    <h3>{grub.item}</h3>
                    <h3>${grub.price}</h3>
                </div>
            )
        })
        return (
            <div>
                Orders
                {mappedGrub}
                <Link to='/groups'><button>Back to groups</button></Link>
            </div>
        )
    }
}
