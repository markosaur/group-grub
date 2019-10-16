import React, { Component } from 'react'
import MyGroups from './MyGroups'
import {Link} from 'react-router-dom'

export default class extends Component {
    render() {
        return (
            <div className="groupsBody">
                <div className ="groups">
                <h3>Groups</h3>
                </div>

                
                <div>
                    <MyGroups/>
                </div>


                <div className="btnContainer">

                    <div className="btn">
                        <Link to = '/create' >
                        <button>Create</button>
                        </Link>
                    </div>
                    
                    <div className="btn">
                        <Link to ='/availablegroups'>
                        <button>Join</button>
                        </Link>
                    </div>
                    
                </div>

            </div>
        )
    }
}
