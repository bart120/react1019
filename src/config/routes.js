import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home/home';
import ListRoom from '../pages/rooms/list';
import AddRoom from '../pages/rooms/add';
import Login from '../pages/login/login';
import DetailRoom from '../pages/rooms/detail';
class Routes extends React.Component {

    render() {
        return (
            <>
                <Route path='/' exact component={Home} />
                <Route path='/rooms' exact component={ListRoom} />
                <Route path='/rooms/add' exact component={AddRoom} />
                <Route path='/room/:id' exact component={DetailRoom} />
                <Route path='/login' exact component={Login} />
            </>);
    }
}

export default Routes;