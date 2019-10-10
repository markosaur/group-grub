import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

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
            price: this.state.editPrice
        }
        axios.put(`/api/order/${id}`, updatedOrder)
        .then(res => {
            this.props.updateOrder(res.data)
            //maybe a handle toggle
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
        

        return (
            <div>
                {!this.state.edit
                ?
                (<div>
                {/* <h2>{this.props.grub.users_id}</h2> */}
                <h1>{this.props.grub.username}</h1>
                <h2>{this.props.grub.item}</h2>
                <h2>${this.props.grub.price}</h2>
                {button}
                </div>
                )
                :
                (<div>
                    <input placeholder='Edit item here' 
                    onChange={(e)=> this.handleInput(e.target.value)} 
                    value = {this.state.editItem} type='text' 
                    />

                    <input 
                    value = {this.state.editPrice} 
                    onChange={(e)=> this.handleInput(e.target.value)} 
                    type='number'
                    step = '0.01'
                    placeholder='Edit price here'
                    /> 
                    <button onClick={()=>this.handleUpdateOrder(this.props.grub.users_id)}>Update Order</button>

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