import React, { Component } from 'react';

import './App.css';
import {people} from './people.js';
import PeopleList  from './PeopleList.js';

class App extends Component {
  constructor() {
    super();
      this.state = {
        people: []
      };
  }
  componentDidMount() {
    console.log(people);
    this.setState({ people: [...people]});
  }


  render() {
    console.log(this.state.people);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <PeopleList people={this.state.people} />
      </div>
    
  );
  }
 
}

export default App;