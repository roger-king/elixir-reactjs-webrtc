import { HomeContainer as Home } from './home.container';
import { ReactStateDeclaration } from '@uirouter/react';

/**
 * HomeState
 * Sets the Home Container to be accessible through at "/".
 */

export const HomeState: ReactStateDeclaration = {
    name: 'home',
    url: '/',
    component: Home
};
