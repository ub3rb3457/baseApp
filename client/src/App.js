import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LineChart from './Pages/Components/newChart'
import LineChart2 from './Pages/Components/Chart2'
import Chart from './Pages/Components/Chart'
import useStore from './hooks/useStore'


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
            <LineChart />
          </Route>
          <Route path="/users">
            <LineChart2 />
          </Route>
          <Route path="/">
            <Chart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;