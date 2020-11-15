import React from 'react';
import { Route, Switch } from "react-router";
import SWService from "../../lib/services/swService";

import CardsRoot from "../CardsRoot";
import CardsList from "../CardsList";
import Card from "../Card";

import Page404 from "../Page404";
import Home from "../Home";
// import PropTypes from 'prop-types';

const sw = new SWService();

const Routes = () => (
    <main>
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/:category/:id' exact>
                <CardsRoot
                    getData={sw.getItemData}
                    component={Card}
                />
            </Route>
            <Route exact path='/:category'>
                <CardsRoot
                    getData={sw.getListData}
                    component={CardsList}
                />
            </Route>
            <Route component={Page404} />
        </Switch>
    </main>
);

export default Routes;