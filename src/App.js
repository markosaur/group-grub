import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/App.scss'
import './styles/reset.css'
import Nav from './Components/Nav'
import routes from './routes'
import {withRouter} from 'react-router-dom' 

class App extends Component { 
  constructor(props){
    super(props)
  }
  // console.log(props)
  render(){

    const navigation = this.props.location.pathname
    let comp;

    if(navigation ==='/' || navigation ==='/login' || navigation === '/register'){
      comp = null
    } else {
      comp = <Nav/>
    }


  return (
    <div className="App">
      <div>
        {comp}
      </div>
      {routes}
    </div>
  );
}
}

export default withRouter (App);
