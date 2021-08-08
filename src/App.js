import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Test from './pages/Test'
import Other from './pages/Other'

function App() {
  return (
    <div className="App">
      <Router basename="/">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/other">Other</Link>
            </li>
          </ul>
        </nav>
      <Switch>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/other">
            <Other />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
