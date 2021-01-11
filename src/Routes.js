// Import all modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Context
import Context from './Context';

// Import all views
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Forgot from './views/Forgot';

const { ShowPasswordProvider } = Context;

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ShowPasswordProvider>
          <Route path="/" exact component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/forgot" component={ Forgot } />
        </ShowPasswordProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;