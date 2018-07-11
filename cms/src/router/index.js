import { Router, Route, Switch, HashRouter } from "react-router-dom";
import React, { Component } from "react";

import Layout from "../containers/layout";
import Login from "../containers/login";
const RouterConfig = (
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Layout} />
    </Switch>
  </HashRouter>
);

export default RouterConfig;
