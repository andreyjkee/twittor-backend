import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import configureStore from '../Redux/configureStore';
import Routes from './Routes';
import Main from './Main';
import MainModal from '../../../shared/modal/MainModal';

import '../styled/GlobalStyles';

const store = configureStore();

const App = ({ children }) => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Main>
          <Routes />
          <MainModal />
          {children}
        </Main>
      </BrowserRouter>
    </Provider>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

export default hot(module)(App);
