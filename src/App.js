import React, { Component } from 'react';
import './App.css';

// Componentes
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';

// Views Links
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Brands from './views/Brands/Brands';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import ProductList from './views/ProductList/ProductList';
import Cart from './views/Cart/Cart';
import ProductoDetail from './views/ProductDetail/ProductDetail';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <HeaderNavbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/brands" exact component={Brands} />
            <Route path="/productlist" exact component={ProductList} />
            <Route path="/about" exact component={Brands} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/productdetail" exact component={ProductoDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
