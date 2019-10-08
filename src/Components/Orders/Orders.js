import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Orders extends Component {
    constructor(){
        super();
        this.state = {
            group: []
        };
    }

    async componentDidMount(){
        const group = await axios.get(`/api/group/${this.props.match.params.groups_id}`)
        if(group.data === 'Order not found!'){
            console.log(group.data)
        this.setState({
            group: {
                groups_name : 'Items not found'
            }
        })
    }else {
        this.setState({
            group: group.data
        })
    }
}

// async componentDidUpdate(prevProps){
//     if(prevProps !== this.props){
//         const order = await axios.get(`/api/order/${this.props.match.params.groups_id}`)
//         if(order.data=== 'Order not found!'){
//             this.setState({
//                 order: {
//                     item
//                 }
//             })
//         }
//     }
// }

    render() {
        return (
            <div>
                Orders
                <h1>{this.state.group.groups_name}</h1>
                <Link to='/groups'><button>Back to groups</button></Link>
            </div>
        )
    }
}
