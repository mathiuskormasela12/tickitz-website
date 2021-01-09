// Import all modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Context
import Context from './Context';

// Import all views
import Login from './views/Login';

const { ShowPasswordProvider } = Context;

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ShowPasswordProvider>
          <Route path="/login" exact component={ Login } />
        </ShowPasswordProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;