import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

import {Theme, GlobalStyles} from './styles';

import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles/>
    <Router>
      <Routes/>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
