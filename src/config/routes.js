import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/home';
import ListRoom from '../pages/rooms/list';
import AddRoom from '../pages/rooms/add';
import Login from '../pages/login/login';
import DetailRoom from '../pages/rooms/detail';
import { connect } from 'react-redux';
class Routes extends React.Component {

    render() {
        return (
            <>
                <Route path='/' exact component={Home} />
                <Route path='/rooms' exact component={ListRoom} />
                <Route path='/rooms/add' exact render={(props) => {

                    console.log('toto');
                    return (
                        this.props.isConnected ? <AddRoom /> : <Redirect to={{ pathname: '/login' }} />
                    )
                }} />
                <Route path='/room/:id' exact component={DetailRoom} />
                <Route path='/login' exact component={Login} />
            </>);
    }
}
const mapStateToProps = (stateStore) => ({
    isConnected: stateStore.auth.isConnected
});

export default connect(mapStateToProps)(Routes);