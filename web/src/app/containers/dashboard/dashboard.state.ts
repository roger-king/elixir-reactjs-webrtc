import { DashboardContainer as Dashboard } from './dashboard.container';
import { ReactStateDeclaration } from '@uirouter/react';

/**
 * DashboardState
 * Sets the Dashboard Container to be accessible through at "/".
 */

export const DashboardState: ReactStateDeclaration = {
    name: 'dashboard',
    url: '/dashboard',
    component: Dashboard,
    data: {
        autheticate: true
    }
};
