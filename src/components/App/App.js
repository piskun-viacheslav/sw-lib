import React from 'react';

import Header from "../Header";
import SearchBar from "../SearchBar";
import Routes from "../Routes";

import './app.scss';

const App  = () => {
    return (
        <div className="app">
            <Header/>
            <SearchBar/>
            <Routes/>
        </div>
    )
};

export default App;