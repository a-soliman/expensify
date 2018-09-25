import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter'
import 'normalize-scss/sass/_normalize.scss';
import './styles/styles.scss';



const appContainer = document.querySelector('#app');
ReactDOM.render(<AppRouter />, appContainer);