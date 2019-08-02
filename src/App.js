import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <Person name="Alex"/>
          <Person name="Manu"> My hobbies: nothing </Person>
        <Person name="Max"/>
      </div>
    );
  }
}

export default App;
