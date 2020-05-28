import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Material UI
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MuiAppBar from './components/MuiAppBar';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';

import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
  root: {
    // background: '#303030'
  }
})

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <Grid container direction="column">
          <Grid item>
            <MuiAppBar />
          </Grid>
          <Grid item className={classes.root}>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
