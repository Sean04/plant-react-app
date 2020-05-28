import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b5e20'
    },
    secondary: {
      main: '#37474f'
    },
    type: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={darkTheme}> */}
     <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
