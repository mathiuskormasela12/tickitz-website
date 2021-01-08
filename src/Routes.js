// Import all modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import all views
import Login from './views/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;