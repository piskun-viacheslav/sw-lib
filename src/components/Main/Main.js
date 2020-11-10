import React from 'react';
import { Route, Switch } from "react-router";
import SWService from "../../lib/services/swService";

import LibraryRoot from "../LibraryRoot";
import LibraryList from "../LibraryList";
import LibraryItem from "../LibraryItem";

import Page404 from "../Page404";
import Home from "../Home";
// import PropTypes from 'prop-types';

const sw = new SWService();

const Main = () => (
    <main>
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route
                exact
                path='/:category/:id'
                render={ ({match }) =>
                    <LibraryRoot
                        match={match}
                        getData={sw.getItemData}
                        component={LibraryItem}
                    />
                }/>

            <Route
                exact
                path='/:category'
                render={({match}) =>
                   <LibraryRoot
                        match={match}
                        getData={sw.getListData}
                        component={LibraryList}
                   />
               }/>
            <Route component={Page404} />
        </Switch>
    </main>
);

export default Main;