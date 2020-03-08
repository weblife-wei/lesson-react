import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"
import Home from './Home'
import Theme from './Theme'
import Login from './Login'

export default function route() {
  return (
    <div>
      路由组件
      <Router>
        <div>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/theme">theme</Link></li>
            <li><Link to="/login">login</Link></li>
          </ul>
          {/* <Switch> */}
            <Route exact path="/" component={Home} render={()=><h3>111</h3>}></Route>
            <Route path="/theme" component={Theme}></Route>
            <Route path="/login" component={Login}></Route>
            <Route children={()=><h3>222</h3>}></Route>
          {/* </Switch> */}
        </div>
      </Router>
    </div>
  )
}
