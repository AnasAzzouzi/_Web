import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ListRobot from './Components/ListRobot'

class App extends Component {
    
  render(){
  return (
    <div className="App">
      
      
      <ListRobot Robots={this.Roboto}/>
    </div>
  );
  }
}

export default App;
