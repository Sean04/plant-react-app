import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Material UI
import { 
  Grid,
  Drawer,
  List,
  ListItem
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MuiAppBar from './components/MuiAppBar';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';
import AppDrawer from './components/AppDrawer';

import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
  root: {
    background: '#eceff1',
    minHeight: '1000'
  }
})

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <MuiAppBar />
        {/* <Drawer
          variant="permanent">
          <List>
            <ListItem>
              Drawer
            </ListItem>
          </List>
        </Drawer> */}
        <Switch>
          <Route path="/ctenanthe">
            <Dashboard name="Ctenanthe" />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
