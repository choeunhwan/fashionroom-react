import React, { Component } from 'react';
import './App.css';
import Header_navbar from './components/Header_navbar/Header_navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header_navbar />
        <ItemListContainer title={'Calzado'}/>
        <ItemListContainer title={'Sweater'}/>
        <ItemListContainer title={'Accesorios'}/>
      </div>
    );
  }
}

export default App;
