import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Goal from './pages/Goal';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
// import Profile from './pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/goal" component={Goal} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/dashboard/profile" component={Profile} /> */}
      </Switch>
    </BrowserRouter>
  );
}
