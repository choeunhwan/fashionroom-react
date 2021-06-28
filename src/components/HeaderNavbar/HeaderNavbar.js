import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Fashionroom from './logo_white.svg';
import HeaderSearchButton from './HeaderSearchButton';

import { Link } from "react-router-dom";
class HeaderNavbar extends Component {
    render() {
        return (
            <div>
                <header>

                    <Navbar bg="dark" variant="dark" sticky="top">
                        <Link to="/" className="navbar-brand">
                            <img
                                src={Fashionroom}
                                height="24"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/" className="nav-link">Inicio</Link>
                                <Link to="/brands" className="nav-link">Marcas</Link>
                                <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                                    <Link to="/productlist" className="dropdown-item">Mujer</Link>
                                    <Link to="/productlist" className="dropdown-item">Hombre</Link>
                                    <Link to="/productlist" className="dropdown-item">Accesorios</Link>
                                    <Link to="/productlist" className="dropdown-item">Calzados</Link>
                                </NavDropdown>
                                <Link to="/contact" className="nav-link">Contacto</Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
                                <HeaderSearchButton />
                                <Link to="/cart" className="btn btn-primary mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart mr-1" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    Carrito de Compra </Link>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                </header>
            </div>
        );
    }
}

export default HeaderNavbar;