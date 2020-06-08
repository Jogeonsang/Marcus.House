import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Store from "./Store.tsx";

const Routes = () => (
  <Switch>
    <Route path="/store" component={Store}/>
  </Switch>
);

export default Routes
