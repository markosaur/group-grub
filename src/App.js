import React from 'react';
import logo from './logo.svg';
import './App.css';
import Available from './Components/Available/Available';
import Create from './Components/Create/Create';
import Dashboard from './Components/Dashboard/Dashboard';
import Groups from './Components/Groups/Groups';
import Login from './Components/Login/Login';
import MyGroups from './Components/MyGroups/MyGroups';
import Orders from './Components/Orders/Orders';
import Register from './Components/Register/Register';


function App() {
  return (
    <div className="App">
      <Available/>
      <Create/>
      <Dashboard/>
      <Groups/>
      <Login/>
      <MyGroups/>
      <Orders/>
      <Register/>

    </div>
  );
}

export default App;
    import Available from './Components/Available/Available';

