import { AUTH_LOGIN, AUTH_LOGOUT } from "../actions/authentication-actions";


const INITIAL_STATE = {
    isConnected: sessionStorage.getItem('USER') != null,
    user: JSON.parse(sessionStorage.getItem('USER'))
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            sessionStorage.setItem('USER', JSON.stringify(action.payload));
            return { isConnected: true, user: action.payload };
        case AUTH_LOGOUT:
            sessionStorage.removeItem('USER');
            return { isConnected: false, user: null };
        default:
            return state;
    }

};

