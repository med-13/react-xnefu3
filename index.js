import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React App'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
           title: 'The Obstacle is the way',
           author: 'Rayan Holiday',
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
