import { createStore, combineReducers } from 'redux';
import servicesReducer from '../reducers/services-reducer';
import authenticationReducer from '../reducers/authentication-reducer';


const rootReducer = combineReducers({ services: servicesReducer, auth: authenticationReducer });


export const store = createStore(rootReducer);
