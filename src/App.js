import React, { Component } from 'react';
import './App.css';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
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
