import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Random from './Random'

class App extends Component {
  constructor() {
    super()
    this.state = {
      helloWorldShown: false
    }
    this.onClick = this.onClick.bind(this)
  }
  render() {
    const {helloWorldShown} = this.state
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TEST!! </h2>
          
          {helloWorldShown &&
            <div>
              Hello World
            </div>
          }
          <button onClick={this.onClick}>button</button>  
        </div>
        <p className="App-intro">
          <Random 
            multiplier={100}
          />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>something</div>
      </div>
    );
  }

  onClick(event) {
    event.preventDefault()  // 
    this.setState({helloWorldShown: true})
  }
}

export default App;
