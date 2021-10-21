import React from 'react';
import './App.css';
import Container from './components/Container';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}
