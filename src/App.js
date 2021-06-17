import React, { Component } from 'react';
import './App.css';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import ContainerGrid from './components/ContainerGrid/ContainerGrid';
class App extends Component {

  render() {
    return (
      <div className='App'>
        <HeaderNavbar />
        <ContainerGrid />
      </div>
    );
  }
}

export default App;
