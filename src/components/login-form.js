import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {

    static propTypes = {
        onLogin: PropTypes.func.isRequired,
        login: PropTypes.string,
        password: PropTypes.string
    };

    valid = true;

    state = {
        login: this.props.login || '',
        password: this.props.password || '',
        errors: {
            errorLogin: '',
            errorPassword: ''
        }
    }


    onSubmit = (event) => {
        event.preventDefault();
        this.checkValues();
        if (this.valid) {
            this.props.onLogin(this.state, event);
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        //this.checkValues();
        // console.log(this.state);

    }

    checkValues = () => {
        this.valid = true;
        this.setState({
            errors: {
                errorLogin: '',
                errorPassword: ''
            }
        });
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regEmail.test(this.state.login)) {
            this.setState({ errors: Object.assign(this.state.errors, { errorLogin: 'Email invalide' }) });
            this.valid = false;
        }
        //console.log(this.state);
        const regPassword = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]){6,25}.*$/;
        if (!regPassword.test(this.state.password)) {
            this.valid = false;
            this.setState({ errors: Object.assign(this.state.errors, { errorPassword: 'Mot de passe invalide' }) });
        }
        //console.log(this.state);
    }

    render() {
        return (
            <Form noValidate onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="email" placeholder="login" onChange={this.onChange} name="login" value={this.state.login} />
                    {this.state.errors.errorLogin !== null && this.state.errors.errorLogin !== '' ? (
                        <Form.Text className="alert alert-danger">
                            {this.state.errors.errorLogin}
                        </Form.Text>
                    ) : (<></>)}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="mot de passe" onChange={this.onChange} name="password" value={this.state.password} />
                    {this.state.errors.errorPassword !== null && this.state.errors.errorPassword !== '' ? (
                        <Form.Text className="alert alert-danger">
                            {this.state.errors.errorPassword}
                        </Form.Text>
                    ) : (<></>)}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Se connecter
                </Button>
            </Form >
        );
    }

}

export default LoginForm;