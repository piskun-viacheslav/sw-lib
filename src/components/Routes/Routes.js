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
            <Route
                exact
                path='/:category/:id'
                render={ ({match }) =>
                    <CardsRoot
                        match={match}
                        getData={sw.getItemData}
                        component={Card}
                    />
                }/>

            <Route
                exact
                path='/:category'
                render={({match}) =>
                   <CardsRoot
                        match={match}
                        getData={sw.getListData}
                        component={CardsList}
                   />
               }/>
            <Route component={Page404} />
        </Switch>
    </main>
);

export default Routes;