import React from 'react'
// import {BrowserRouter as Router, Route,Link} from "react-router-dom"
import {BrowserRouter as Router, Route,Link} from "./../KReactRouter/KReactRouter"
import Home from './Home'
import Login from './Login'
import Theme from './Theme'

export default function MyRoute() {
  return (
    <Router>
      <div>
        <li><Link to="/">home</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/theme">theme</Link></li>

        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/theme" component={Theme}/>

      </div>
    </Router>
  )
}
