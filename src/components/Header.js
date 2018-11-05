import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify!</h1>
        <ul className="nav">
            <li>
                <NavLink to = "/dashboard" activeClassName = "is-active" exact={true}>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to = "/create" activeClassName = "is-active">Create Expense</NavLink>
            </li>
            <li>
                <NavLink to = "/help" activeClassName = "is-active">Help</NavLink>
            </li>  
        </ul>
    </header>
);

export default Header;