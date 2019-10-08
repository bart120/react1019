import React from 'react';
import LoginForm from '../../components/login-form';

class Login extends React.Component {
    state = {}

    onLogin = (values, event) => {
        //appel serveur
        console.log(values);
    }

    render() {
        return (
            <>
                <h2>Connexion</h2>
                <LoginForm onLogin={this.onLogin} login="bob@gmail.com" />
            </>
        );
    }
}

export default Login;