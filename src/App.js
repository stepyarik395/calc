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
    this.handlePlus = this.handlePlus.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
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
  handlePlus = (e) => {
    let num = e.target.value;
    this.setState(() => ({
      firstNumber: this.state.inp,
      vac: num
    }));
    this.handleRefresh()
  }
  handleRefresh = () => {
    this.setState(() => ({
      inp: '',
    }));
  }
  handleRez = () => {
    if (this.state.vac === '+') {
      this.setState(() => ({
        secondNumber: this.state.inp,
        inp: '',
        // inp: this.state.firstNumber + this.state.secondNumber
      }));
    } else {
      console.log("false");
    }
  }


  render() {
    console.log(this.state.secondNumber)
    // console.log(this.state.firstNumber)
    // console.log(this.state.vac)
    // console.log(this.state.inp);
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
          <button onClick={this.handleRez}>=</button>
          <button>-</button>
          <button value="+" onClick={this.handlePlus}>+</button>
          <button>*</button>
        </div>
      </div >
    );
  }
}

export default App;
