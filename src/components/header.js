import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends React.Component {

    state = {
        isAuthenticated: false
    };

    onLogout = (event) => {
        this.setState({ isAuthenticated: false });
        this.props.history.push('/');
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Formation React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Accueil</Link>
                        <Link to="/rooms" className="nav-link">Salles</Link>
                        <Link to="/rooms/add" className="nav-link">Ajouter</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {this.state.isAuthenticated ? (
                        <>
                            <Navbar.Text>Bonjour toto</Navbar.Text>
                            <Button onClick={this.onLogout}>Se déconnecter</Button>
                        </>
                    ) : (
                            <Link to="/login" className="nav-link">Se connecter</Link>
                        )}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(Header);