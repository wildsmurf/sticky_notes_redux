import React, { Component } from 'react';
import StickyForm from './components/StickyForm';
import StickyList from './components/StickyList';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Header />
        <StickyForm />
        <StickyList />
      </div>
    );
  }
}

export default App;
