import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Test from './pages/Test/Test'

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/test">About</Link>
            </li>
          </ul>
        </nav>
      <Switch>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
