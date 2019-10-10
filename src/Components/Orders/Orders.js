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
            price: 0,
            // update: false
        }
    }

    handleToggle =()=> {
        this.setState({
            post: !this.state.post
        })
    }

    handleChange = async (e, key) => {
        this.setState({
            [key]: e.target.value
        })
        console.log(e.target.value)
    }

    async componentDidMount(){
        const group = await axios.get(`/api/group/${this.props.match.params.id}`)
        this.setState({
            groobies: group.data
        })
    }
    //componentDidMount runs everytime there is a render or rerender of the page.  changing state forces a rerender of the page.

//     async componentDidUpdate(prevProps){
//         if(prevProps !== this.props){
//         const group = await axios.get(`/api/group/${this.props.match.params.id}`)
//         this.setState({
//             groobies: group.data
//         })
//     }
// }
//Only use component did update if you pass props from the parent to child and you have changed the parent comp and the data sent to child has changed.


    postOrder() {
        const {item, price} = this.state
        console.log(item, price)
        const groups_id = this.props.match.params.id
        console.log(item, price)
        if(item==='' || price===''){
            return alert ('Please fill in all input boxes')
        }
        axios.post('/api/order', { item, price, groups_id }).then((res) => {
            this.setState({
                groobies: res.data
            })
            this.handleToggle()
            console.log(res)
        })
    }

    render() {
        console.log(this.state)
        const mappedGrub = this.state.groobies.map(grub => {
            return (
                <div>
                    <h1>{grub.username}</h1>
                    <h3>{grub.item}</h3>
                    <h3>${grub.price}</h3>
                    {/* <button>update</button> */}
                </div>
            )
        })
        return (
            <div>
                {!this.state.post
                ?
                (<div>
                {mappedGrub}
                <button onClick={this.handleToggle}>Place Order</ button>
                <Link to='/groups'><button>Back to groups</button></Link>                
                </div>
                )
                :                                
                (<div>
                    <input 
                    value = {this.state.item}
                    onChange={e => this.handleChange(e, 'item')}
                    type='text'
                    placeholder='item'
                    />
                    <input
                    value = {this.state.price}
                    onChange={e => this.handleChange(e, 'price')}
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    />
                    <button onClick={() => this.postOrder()}>Post Order</button>
                    <Link to='/groups'><button>Back to groups</button></Link>                                
                </div>
                )
            }
                    
            </div>
        )   
    }
}
