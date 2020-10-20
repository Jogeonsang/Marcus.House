import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux'
import {ConnectedRouter} from "connected-react-router";

import {Theme, GlobalStyles} from './styles';

import App from "./app";
import store from 'store/index'
import browserHistory from 'lib/history'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles/>
      <Provider store={store}>
          <ConnectedRouter history={browserHistory}>
              <App/>
          </ConnectedRouter>
      </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
