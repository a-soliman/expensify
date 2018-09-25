import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize-scss/sass/_normalize.scss';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component.
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my create component.
    </div>
);
const EditExpensePage = () => (
    <div>
        This is from Edit page.
    </div>
); 

const HelpPage = () => (
    <div>
        HELP Page!
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify!</h1>
        <ul>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/create">Add</Link>
            </li>
            <li>
                <Link to = "/edit">Edit</Link>
            </li>
            <li>
                <Link to = "/help">Help</Link>
            </li>  
        </ul>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

const appContainer = document.querySelector('#app');
ReactDOM.render(routes, appContainer);