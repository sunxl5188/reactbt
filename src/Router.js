import React from "react"
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom"

import Home from "./home"
import About from "./about"
import Error from "./Error"

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact component={Error}/>
    </Switch>
  </HashRouter>
)

export default BasicRoute

