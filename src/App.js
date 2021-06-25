import React, { Component } from 'react';
import './App.css';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import ItemList from './components/ItemListContainer/ItemList/ItemList';
class App extends Component {

  render() {
    return (
      <div className='App'>
        <HeaderNavbar />
        <ItemList />
      </div>
    );
  }
}

export default App;
