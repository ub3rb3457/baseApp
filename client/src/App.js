import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RPMGauge from './RPMGauge'
import useStore from './Store'
import Boom from './x'

const App = () => {
  const { count, inc } = useStore()
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <p>{count}</p>
            <button onClick={inc}>One Up</button>
          </Route>
          <Route path="/users">
            <Boom />
          </Route>
          <Route path="/">
            <RPMGauge />
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;