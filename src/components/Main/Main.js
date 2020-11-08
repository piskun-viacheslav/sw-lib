import React from 'react';
import {Route} from "react-router";
import SWService from "../../lib/swService";

import LibraryList from "../LibraryList";
import LibraryItemRoot from "../LibraryItemRoot";
import LibraryItem from "../LibraryItem";
// import PropTypes from 'prop-types';

const sw = new SWService();
const Main = () => {
    return(

    <main>
        <Route path={'/people'} exact
               render={

                   ({match}) => <LibraryList
                       getData={sw.getAllPeople}
                       match={match}
                       // component={Person}
                   />
               }/>
        <Route path={'/planets'} exact
               render={
                   ({match}) => <LibraryList
                       getData={sw.getAllPlanets}
                       match={match}
                   />
               }/>
        <Route path={'/starships'} exact
               render={
                   ({match}) => <LibraryList
                       getData={sw.getAllStarships}
                       match={match}
                   />
               }/>
        <Route path={'/people/:id'} render={ ({match}) => (
            <LibraryItemRoot
                id={match.params.id}
                getData={sw.getPerson}
                viewData={(data) => <LibraryItem data={data} />}
            />)
        }/>
        <Route path={'/planets/:id'} render={ ({match}) => (
            <LibraryItemRoot
                id={match.params.id}
                getData={sw.getPlanet}
                viewData={(data) => <LibraryItem data={data} />}
            />)
        }/>

        <Route path={'/starships/:id'} render={ ({match}) => (
            <LibraryItemRoot
                id={match.params.id}
                getData={sw.getStarship}
                viewData={(data) => <LibraryItem data={data} />}
            />)
        }/>
    </main>
)};

export default Main;