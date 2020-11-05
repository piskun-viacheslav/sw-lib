import React from 'react';
import { Route } from "react-router";
import SWService from "../../utils/swService";

import Header from "../Header";
import SearchBar from "../SearchBar";
import LibraryList from "../LibraryList";
import LibraryItem from "../LibraryItem";
import Person from "../Person";
import Planet from "../Planet";
import Starship from "../Starship";

import './app.scss';

const sw = new SWService();
const App  = () => {
    return (
        <div className="app">
            <Header/>
            <SearchBar/>
            <Route path={'/people'} exact
                render={
                    ({match}) => <LibraryList
                        getData={sw.getAllPeople}
                        match={match}
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
                <LibraryItem
                   id={match.params.id}
                   getData={sw.getPerson}
                   viewData={(data) => <Person person={data} />}
                />)
            }/>
           <Route path={'/planets/:id'} render={ ({match}) => ( <LibraryItem
                   id={match.params.id}
                   getData={sw.getPlanet}
                   viewData={(data) => <Planet planet={data} />}
               />)
           }/>

            <Route path={'/starships/:id'} render={ ({match}) => ( <LibraryItem
                    id={match.params.id}
                    getData={sw.getStarship}
                    viewData={(data) => <Starship starship={data} />}
                />)
            }/>
        </div>
    )
};

export default App;