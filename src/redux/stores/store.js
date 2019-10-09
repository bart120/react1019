import { createStore } from 'redux';
import servicesReducer from '../reducers/services-reducer';

export const store = createStore(servicesReducer);
