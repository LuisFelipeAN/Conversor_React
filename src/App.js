import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Conversor from './component/Conversor'
class App extends Component {
  render(){
    return (
      <div className="App">
        <Conversor></Conversor>
      </div>
    );
  }
}

export default App;
