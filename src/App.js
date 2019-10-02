import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Auth/Home';
import Groups from './Components/Groups/Groups';
import Orders from './Components/Orders/Orders';
import Create from './Components/Groups/Crerate'
import Available from './Components/Groups/Available';
import routes from './routes'
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Nav from './Components/Nav'


function App() {
  return (
    <div className="App">
      <Nav/>
      {routes}
    </div>
  );
}

export default App;

