// Main.js

import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
    </Switch>
  </main>
);

export default Main;
