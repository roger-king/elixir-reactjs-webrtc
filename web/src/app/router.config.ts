import * as React from 'react';
import { pushStateLocationPlugin, UIRouterReact } from '@uirouter/react';
import { Home , Dashboard } from './containers';

export const states = [ Dashboard, Home ];

export const plugins = [
  pushStateLocationPlugin
];

export const config = (router: UIRouterReact) => {
  // Hook for if route is not registered.
  router.urlRouter.otherwise('/');

  // router.transitionService.onBefore(reqAuthHook.criteria, reqAuthHook.callback, {priority: 10});
};
