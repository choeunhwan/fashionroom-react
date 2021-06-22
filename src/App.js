import React, { Component } from 'react';
import './App.css';
import ItemListContainer from './components/ContainerGrid/ItemListContainer/ItemListContainer';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
class App extends Component {

  render() {
    return (
      <div className='App'>
        <HeaderNavbar />
        <ItemListContainer />
      </div>
    );
  }
}

export default App;
