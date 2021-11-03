import './App.css';
import Histroy from './component/History';
import Input from './component/Input';
import Balance from './component/Balance';
import Head from './component/Head';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { balance: 0,
       income: 0, 
       expense: 0, 
       text: "",
        listE: [], 
        listT: [] };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value })
  }

  newChange = e => {
    e.preventDefault();
    this.setState({ expense: Number(e.target.value) })
  }

  handleClick = e => {
    e.preventDefault();
    if (Number(this.state.expense) > 0) {
      this.setState({ balance: this.state.balance + Number(this.state.expense) })
      this.setState({ income: this.state.balance + Number(this.state.expense) })
      this.state.listE.push(Number(this.state.expense))
      this.state.listT.push(this.state.text)
    }
    else if (Number(this.state.expense < 0)) {
      this.setState({ income: this.state.balance + Number(this.state.expense) })
      this.state.listE.push(Number(this.state.expense))
      this.state.listT.push(this.state.text)
    }
  }

  delteHistroy=(e)=>{
    e.preventDefault();
    this.setState({listT:[],listE:[]})
    
  }

  render() {
    const txt = this.state.listT
    const amt = this.state.listE.map((e) => e)
    return (
      <div className="App">
        <div className="main">
          <Head />
          <Balance expense1={Number(this.state.expense)} total={this.state.balance} main={this.state.income} />
          <Histroy textList={txt} Amountlist={amt} test={this.state.text} amount={this.state.expense} />
          <Input text={this.handleChange} Amount={this.newChange} buttonClick={this.handleClick} Histroy={this.delteHistroy}/>
        </div>
      </div>
    );
  }
}
export default App;
