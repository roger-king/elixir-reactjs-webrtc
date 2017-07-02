import { LoginContainer as Login } from './login.container';

/**
 * LoginState
 * Sets the Login Container to be accessible through at "/login".
 */

export const LoginState = {
    name: 'login',
    url: '/login',
    component: Login
};
