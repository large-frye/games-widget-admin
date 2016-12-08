import * as React from "react"
import * as ReactDOM from "react-dom"
import { Router, Route, Link, hashHistory } from "react-router"
import { Admin } from "./components/admin"

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Admin} />
  </Router>
, document.getElementById('app'));