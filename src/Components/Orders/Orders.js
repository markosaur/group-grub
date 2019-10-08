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
//         if(group.data === 'Order not found!'){
//             console.log(group.data)
//         this.setState({
//             group: {
//                 groups_name : 'Items not found'
//             }
//         })
//     }else {
//         this.setState({
//             group: group.data
//         })
//     }
// }

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

// g.groups_name, u.username, o.item, o.price

    render() {

        const mappedGrub = this.state.groobies.map(grub => {
            return (
                <div>
                    <h1>grub.username</h1>
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
