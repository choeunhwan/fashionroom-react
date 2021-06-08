import React, { Component, Fragment } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Fashionroom from '../assets/fashion_logo.svg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>

          <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">
              <img
                // src={Fashionroom}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=" "
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Marcas</Nav.Link>
                <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Mujer</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Hombre</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Calzados</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>

        </header>
      </div>
    );
  }
}

export default App;
