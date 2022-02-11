import React, {Component} from 'react';
import './Moeda.css';
export default class Moeda extends Component{
  constructor(props){
    super(props)
    this.state={
      moeda: this.props.moeda
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
      this.setState({moeda: event.target.value},()=>{
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
      });
  }


  render(){
      return (
          <div className="Moeda">
            <select value={this.state.moeda} onChange={this.handleChange}>
             <option value="USD">USD</option>
             <option value="BRL">BRL</option>
           </select>
          </div>
      )
  }
}
