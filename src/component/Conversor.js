import React, {Component} from 'react';
import Moeda from './Moeda'
export default class Conversor extends Component{
  constructor(props){
    super(props);
    this.state={
      moedaA: "USD",
      moedaB: "BRL",
      moedaAValor: "",
      moedaBValor:0,
      moedas:["USD","BRL"]
    }
    this.convert=this.convert.bind(this);
    this.setMoedaA=this.setMoedaA.bind(this);
    this.setMoedaB=this.setMoedaB.bind(this);
  }
  setMoedaA(event){
    this.setState({moedaA:event.moeda});
  }
  setMoedaB(event){
      this.setState({moedaB:event.moeda});
  }
  convert(){
    let from_to= `${this.state.moedaA}_${this.state.moedaB}`
    let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=ea62203821d0b1a48f61`
    fetch(url)
      .then(res=>{
        return res.json();
      })
      .then(json=>{
          let cotation=json[from_to];
          let moedaBValor=(parseFloat(this.state.moedaAValor)*cotation).toFixed(2);
          this.setState({moedaBValor});
      })
  }
  render(){
      return (
          <div className="Conversor">
            <h2>Converter <Moeda moeda={this.state.moedaA} onChange={this.setMoedaA}/> Para <Moeda moeda={this.state.moedaB} onChange={this.setMoedaB}/></h2>
            <input type="text" onChange={(event)=>{this.setState({moedaAValor:event.target.value})}}></input>
            <input type="button" value="Converter" onClick={this.convert}></input>
            <h2>Valor Convertido: {this.state.moedaBValor} {this.state.moedaB}</h2>
          </div>
      )
  }

}
