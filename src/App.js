import React from 'react';
import './App.css';

// Componentes
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';

// Views Links
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home/Home';
import ProductList from './views/ProductList/ProductList';
import Cart from './views/Cart/Cart';
import Formulario from './views/Formulario/Formulario';
import ProductDetail from './views/ProductDetail/ProductDetail';

// Provider
import { ItemsProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <ItemsProvider>
        <div className='App'>
          <HeaderNavbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/productlist" exact component={ProductList} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" exact component={Formulario} />
            <Route path="/productdetail/:productId" exact component={ProductDetail} />
          </Switch>
          <Footer />
        </div>
      </ItemsProvider>
    </Router>
  );
}

export default App;