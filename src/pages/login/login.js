import React from 'react';
import LoginForm from '../../components/login-form';

class Login extends React.Component {
    state = {}
    render() {
        return (
            <>
                <h2>Connexion</h2>
                <LoginForm />
            </>
        );
    }
}

export default Login;