import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Table from './Table';
import Contact from './Contact';

function Home() {
    return (
        <Fragment>
            <BrowserRouter>
                <h1 className="h1">Bienvenido a PokeApi</h1>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/table">Table</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/table" component={Table} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}

export default Home;