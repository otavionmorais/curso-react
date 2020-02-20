import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Olá mundo</h1>
        <Person name="Otávio"/>
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Olá Mundo!'));
  }
}

export default App;
