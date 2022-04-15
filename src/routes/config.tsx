import {Route} from '../models/route';

import {Home} from '../screens/Home';
import {Movie} from '../screens/Movie';
import {WebView} from '../screens/WebView';

export const routes: Route[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Movie',
    component: Movie,
  },
  {
    name: 'WebView',
    component: WebView,
  },
];
