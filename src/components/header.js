import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../redux/actions/authentication-actions';

class Header extends React.Component {

    state = {
        //isAuthenticated: false
    };

    onLogout = (event) => {
        this.setState({ isAuthenticated: false });
        this.props.actions.actionLogout();
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
                    {this.props.isConnected ? (
                        <>
                            <Navbar.Text>Bonjour {this.props.user.name}</Navbar.Text>
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

const mapStateToProps = (stateStore) => ({
    isConnected: stateStore.auth.isConnected,
    user: stateStore.auth.user
});

const mapActionsToProps = (payload) => ({
    actions: {
        actionLogout: bindActionCreators(logout, payload)
    }
});

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Header));