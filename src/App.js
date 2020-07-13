import React from 'react';
// import Header from './Header';
import './App.css';


let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let rezarr = []

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inp: '',
      firstNumber: '',
      secondNumber: '',
      vac: ''
    }
    this.hendlClick = this.hendlClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleExpression = this.handleExpression.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleRefreshItems = this.handleRefreshItems.bind(this);
    this.handleRez = this.handleRez.bind(this);
  }
  hendlClick = (e) => {
    let num = e.target.value;
    this.setState(() => ({
      inp: this.state.inp + num,
    }));
  }
  handleChange = (e) => {
    let num = e.target.value;
    this.setState(() => ({
      inp: num,
    }));
  }
  handleExpression = (e) => {
    let num = e.target.value;
    this.setState(() => ({
      firstNumber: Number(this.state.inp),
      vac: num
    }));
    this.handleRefresh()
  }
  handleRefresh = () => {
    this.setState(() => ({
      inp: '',
    }));
  }
  handleRefreshItems = () => {
    this.setState(() => ({
      firstNumber: '',
      secondNumber: '',
      inp: ''
    }));
  }
  handleRez = () => {
    this.setState(() => ({
      secondNumber: Number(this.state.inp),
      inp: '',
    }));
    setTimeout(() => {
      if (this.state.vac === '+') {
        this.setState(() => ({
          inp: this.state.firstNumber + this.state.secondNumber
        }));
      } else if (this.state.vac === '-') {
        this.setState(() => ({
          inp: this.state.firstNumber - this.state.secondNumber
        }));
      }
      else if (this.state.vac === '*') {
        this.setState(() => ({
          inp: this.state.firstNumber * this.state.secondNumber
        }));
      }
    }, 200);

  }


  render() {
    console.log(this.state.secondNumber)
    return (
      <div className="wrapper" >
        <input placeholder="введите значение" onChange={this.handleChange} value={this.state.inp} type="text"></input>
        <br />
        <br />
        <div>
          {
            arr.map((item, i) => {
              return (<button value={i} type="button" onClick={this.hendlClick} key={i}>{i}</button>)
            })
          }
          <br />
          <br />
          <button onClick={this.handleRefreshItems}>CE</button>
          <button onClick={this.handleRez}>=</button>
          <button value="-" onClick={this.handleExpression}>-</button>
          <button value="+" onClick={this.handleExpression}>+</button>
          <button value="*" onClick={this.handleExpression}>*</button>
        </div>
      </div >
    );
  }
}

export default App;
