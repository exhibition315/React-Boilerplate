import React from 'react';
import lazy from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const Main = lazy(() => import(/* webpackChunkName: "MainPage" */ '@components/MainPage'));

const App = () => (
  <Switch>
    <Route path="/" component={Main} />
  </Switch>
);

export default App;
