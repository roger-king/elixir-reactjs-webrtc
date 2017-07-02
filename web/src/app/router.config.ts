import * as React from 'react';
import {pushStateLocationPlugin} from '@uirouter/react';
import { Login } from './containers';

export const states = [ Login ];

export const plugins = [
  pushStateLocationPlugin
];
