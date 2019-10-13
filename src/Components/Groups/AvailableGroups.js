import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Available extends Component {
    constructor(){
        super();
        this.state = {
            groups: []
        };
    }

    // async componentDidMount() {
    //     const groups = await 
    // }

    render() {
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
