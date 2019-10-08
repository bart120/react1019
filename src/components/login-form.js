import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends React.Component {

    state = {
        login: '',
        password: ''
    }

    onSubmit = (event) => {

    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(this.state);
    }

    checkValues = () => {
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        const regPassword = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]){6,25}.*$/;
    }

    render() {
        return (
            <Form noValidate onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="email" placeholder="login" onChange={this.onChange} name="login" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="mot de passe" onChange={this.onChange} name="password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Se connecter
                </Button>
            </Form >
        );
    }

}

export default LoginForm;