import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Careers from "./pages/Careers";
import History from "./pages/History";

const routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/especialidades" component={Careers} />
    <Route path="/historia" component={History} />
  </Switch>
);

export default routes;
