import React, { Component } from 'react';
import Header_cart from './Header_cart'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fashionroom from './logo_white.svg';
import Header_search_button from './Header_search_button';

class Header_navbar extends Component {
    render() {
        return (
            <div>
                <header>
                
                    <Navbar bg="dark" variant="dark" sticky="top">
                        <Navbar.Brand href="#home">
                            <img
                                src={Fashionroom}
                                height="24"
                                className="d-inline-block align-top"
                                alt="logo"
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
                                <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
                                <Header_search_button />
                                <Header_cart />
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                </header>
            </div>
        );
    }
}

export default Header_navbar;