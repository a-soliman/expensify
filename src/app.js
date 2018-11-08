import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses'; 

import 'normalize-scss/sass/_normalize.scss';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import moment from 'moment';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});


const jsx = (
    <Provider store={store} >
        <AppRouter/>
    </Provider> 
);

let hasRendered = false;
const renderApp = () => {
    if ( !hasRendered ){
        ReactDOM.render(jsx, appContainer);
        hasRendered = true;
    }
};

const appContainer = document.querySelector('#app');
ReactDOM.render(<LoadingPage />, appContainer);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            
            if ( history.location.pathname === '/' ) {
                history.push('/dashboard');
            }
        });
    }
    else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
