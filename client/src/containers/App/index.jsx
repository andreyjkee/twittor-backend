import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import App from './components/App';
import AppDev from './components/App.dev';

const isDev = process.env.NODE_ENV === 'development';

const Main = () => (isDev ? (<AppDev />) : (<App />));

export default Main;
