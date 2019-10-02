import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Auth/Home';
import Groups from './Components/Groups/Groups';
import Orders from './Components/Orders/Orders';
import Create from './Components/Groups/Crerate'
import Available from './Components/Groups/Available';



function App() {
  return (
    <div className="App">
      <Home/>
      <Groups/>
      <Create/>
      <Available/>
      <Orders/>
    </div>
  );
}

export default App;

