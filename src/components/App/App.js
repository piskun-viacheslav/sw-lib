import React from 'react';

import Header from "../Header";
import SearchBar from "../SearchBar";
import Main from "../Main";

import './app.scss';


const App  = () => {
    return (
        <div className="app">
            <Header/>
            <SearchBar/>
            <Main/>
        </div>
    )
};

export default App;