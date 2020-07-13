import React from 'react';
// import Header from './Header';
import './App.css';
import styled from 'styled-components'

let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

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
    return (
      <Wrapper>
        <Input placeholder="введите значение" onChange={this.handleChange} value={this.state.inp} type="number"></Input>
        <br />
        <br />
        <FlexWrapper>
          {
            arr.map((item, i) => {
              return (<Button value={i} type="button" onClick={this.hendlClick} key={i}>{i}</Button>)
            })
          }
          <br />
          <br />
        </FlexWrapper>
        <WrapperExpresion>
          <ButtonExpresion onClick={this.handleRefreshItems}>CE</ButtonExpresion>
          <ButtonExpresion onClick={this.handleRez}>=</ButtonExpresion>
          <ButtonExpresion value="-" onClick={this.handleExpression}>-</ButtonExpresion>
          <ButtonExpresion value="+" onClick={this.handleExpression}>+</ButtonExpresion>
          <ButtonExpresion value="*" onClick={this.handleExpression}>*</ButtonExpresion>
        </WrapperExpresion>
      </Wrapper >
    );
  }
}

export default App;
const FlexWrapper = styled.div`
  width:300px;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
`;
const WrapperExpresion = styled.div`
  margin-top:2rem;
  display:flex;
`;

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
`;

const Button = styled.button`
  border: 2px solid #6495ED;
  border-radius:5px;
 -webkit-appearance: none;
  font-weight:bold;
  font-size:24px;
  margin-top:1rem;
  min-width: 70px;
  height: 70px;
  cursor: pointer;
  &:nth-child(2){
  margin-left:30px;
  }
  &:nth-child(3){
    margin-left:30px;
  }
  &:nth-child(5){
    margin-left:30px;
  }
  &:nth-child(6){
    margin-left:30px;
  }
  &:nth-child(8){
    margin-left:30px;
  }
  &:nth-child(9){
    margin-left:30px;
  }
`;
const ButtonExpresion = styled.button`
  cursor:pointer;
  font-size:24px;
  margin-top:1rem;
  min-width: 70px;
  height: 70px;
`;
const Input = styled.input`
  padding-left:15px;
  outline:0;
  margin-top:2rem;
  width: 300px;
  height: 50px;
  font-size: 24px;
  &:focus{
    outline:0;
  }
`;