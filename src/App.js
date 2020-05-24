import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppNavbar from './components/AppNavbar';
import Dashboard from './components/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <AppNavbar />
        </nav>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/plants">
            <h1>Plants</h1>
          </Route>
          <Route path="/history">
            <h1>Data</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
