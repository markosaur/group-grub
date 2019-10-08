import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Orders extends Component {
    constructor(){
        super();
        this.state = {
            groobies: [],
            post: false,
            item: '',
            price: 0
        };
    }

    handleToggle = () => {
        this.setState({
            edit: !this.state.post
        })
    }

    async componentDidMount(){
        const group = await axios.get(`/api/group/${this.props.match.params.id}`)
        this.setState({
            groobies: group.data
        })
    }

    // postOrder(){}  need to setStat post back to false

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
                {!this.state.post
                ?
                (<div>
                {mappedGrub}
                <button onClick={this.handleToggle}>Place Order</button>
                <Link to='/groups'><button>Back to groups</button></Link>                
                </div>
                )
                :                                
                (<div>
                    <input 
                    value = {this.state.item}
                    onChange={e=> this.handleChange(e, 'item')}
                    type='text'
                    placeholder='item'
                    />
                    <input
                    value = {this.state.price}
                    onChange={e=> this.handleChange(e, 'price')}
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    />
                    <button onClick={() => this.postOrder()}>Post Order</button>
                </div>
                )
                }
                    
            </div>
        )   
    }
}
