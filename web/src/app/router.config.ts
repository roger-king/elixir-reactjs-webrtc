import * as React from 'react';
import { pushStateLocationPlugin, UIRouterReact } from '@uirouter/react';
import { Home, Dashboard } from './containers';
import { UserService } from './services';

export const states = [Dashboard, Home];

export const plugins = [
  pushStateLocationPlugin
];

// Auth Hook

const authHook = {
  criteria: {
    to: (state) => state.data && state.data.autheticate
  },
  cb: (transition) => {
    let user = new UserService();
    let $state = transition.router.stateService;
    if (user.isAuthenticated()) {
      return $state.target('home', undefined, { location: false });
    }
  }
};

export const config = (router: UIRouterReact) => {
  // Hook for if route is not registered.
  router.urlRouter.otherwise('/');

  // router.transitionService.onBefore(reqAuthHook.criteria, reqAuthHook.callback, {priority: 10});
};
