import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Formation React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Acceuil</Link>
                        <Link to="/rooms">Salles</Link>
                        <Link to="/rooms/add">Ajouter</Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;