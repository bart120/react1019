import React from 'react';
import LoginForm from '../../components/login-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/actions/authentication-actions';

class Login extends React.Component {
    state = {}

    onLogin = (values, event) => {
        //appel serveur
        //console.log(values);
        const user = { name: 'bob', email: values.login };
        this.props.actions.actionLogin(user);
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

const mapActionsToProps = (payload) => ({
    actions: {
        actionLogin: bindActionCreators(login, payload)
    }
});

export default connect(null, mapActionsToProps)(Login);