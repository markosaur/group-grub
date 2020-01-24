import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
//need to make this page more eye appealing, add a header with a nice picture

class IndividualOrder extends Component {
    constructor(){
        super()
        this.state = {
            edit: false,
            editItem: '',
            editPrice: ''
        }
    }

    inputDisplay =()=>{
        console.log(!this.state.edit)
        this.setState ({
            edit: !this.state.edit
        })
    }

    handleInput = async (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    handleUpdateOrder=(id)=>{
        let updatedOrder ={
            item: this.state.editItem,
            price: this.state.editPrice,
            orders_id: this.props.grub.orders_id,
            groups_id: this.props.grub.groups_id
        }
        axios.put(`/api/order/${id}`, updatedOrder)
        .then(result => {
            this.props.updateOrder(result.data)
            //maybe a handle toggle
            this.inputDisplay()
        })
        
    }

    handleDeleteOrder = () => {
        let  groups_id = this.props.grub.groups_id
        
        axios.delete(`/api/order/${this.props.grub.orders_id}?groups_id=${groups_id}`)
        .then(result => {
            this.props.deleteOrder(result.data)
            if(this.state.edit){
                this.inputDisplay()
            }
        })
    }

    render() {
        const id = this.props.user.userId
        console.log(id)

        let button;
        if(id === this.props.grub.users_id){
            button = <button onClick={this.inputDisplay}>Edit</button>
        } else{
            button = null
        }

        let button2;
        if(id === this.props.grub.users_id){
            // button2 = <button onClick={this.handleDeleteOrder}>Delete</button>
            button2 = <Link to={`/orders/${this.props.grub.groups_id}`}><button onClick={()=>this.handleDeleteOrder()}>Delete</button></Link>   
        }else{
            button2 = null
        }

        
        

        return (
            <div>
                {!this.state.edit
                ?
                (<div>
                {/* <h2>{this.props.grub.users_id}</h2> */}
                <div className="orderInfo">
                    <h1>{this.props.grub.username}</h1>
                    <h2>{this.props.grub.item}</h2>
                    <h2>${this.props.grub.price}</h2>
                </div>
                {button}
                {button2}
                
                </div>
                )
                :
                (<div>
                    <input 
                    value = {this.state.editItem} 
                    onChange={e => this.handleInput(e, 'editItem')} 
                    type='text' 
                    placeholder='Edit item here' 
                    />

                    <input 
                    value = {this.state.editPrice} 
                    onChange={e => this.handleInput(e, 'editPrice')} 
                    type='number'
                    step = '0.01'
                    placeholder='Edit price here'
                    /> 
                    <Link to={`/orders/${this.props.grub.groups_id}`}>
                        <button onClick={()=>this.handleUpdateOrder(this.props.grub.users_id)}>Update</button>
                    </Link>
                </div>)
            }

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
    )(IndividualOrder)