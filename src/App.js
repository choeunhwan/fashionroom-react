import React from 'react';
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
import ProductDetail from './views/ProductDetail/ProductDetail';

// Provider
import { ItemsProvider } from './ItemsContext';

function App() {
  return (
    <ItemsProvider>
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
            <Route path="/productdetail/:id" exact component={ProductDetail} />
          </Switch>
        </div>
      </Router>
    </ItemsProvider>
  );
}


export default App;
