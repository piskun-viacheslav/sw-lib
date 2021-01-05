import React, { Component } from 'react';
import { DebounceInput } from "react-debounce-input";

import SearchResults from "../SearchResults";
import Loader from "../Loader";

import { SEARCH_CATEGORIES } from "../../lib/configs/constants";
import SWService from "../../lib/services/swService";

import './searchBar.scss';

const sw = new SWService();

class SearchBar extends Component {
    state = {
        category: '',
        value: '',
        foundItems: [],
        isResultBlockVisible: false,
        isLoading: false,
        isError: false,
    };

    selectedValueRef = React.createRef();

    handleInputChange = (e) => {
        const value = e.target.value.trim();
        if (value) {
         this.setState({
             isResultBlockVisible: true,
             value
         }, this.searchData);
         return;
        }

        this.setState({
            isResultBlockVisible: false,
            value: '',
            foundItems: []
        });
    };

    handleSelectCategory = (e) => {
        const category = e.target.value;
        this.setState((prevState) => ({
            category,
            isResultBlockVisible: !!prevState.value
        }), this.searchData);
    };

    searchData = () => {
        this.setState({
            isLoading: true,
            isError: false,
        });
        const { value, category } = this.state;
        if (value) {
            fetch(`https://swapi.dev/api/${category}/?search=${value}`)
                .then(res => res.json())
                .then(data => {
                    const foundItems = sw.modifyDataList(this.state.category, data);
                    this.setState({
                        foundItems,
                        isLoading: false,
                        isError: false,
                    })
                })
                .catch(() => {
                    this.setState({
                        isError: true,
                        isLoading: false,
                        isLoaded: false
                    })
                })
        }
    };

    closeResults = () => {
        this.setState({
            isResultBlockVisible: false
        });
    };

    componentDidMount() {
        this.setState({
            category: this.selectedValueRef.current.value
        });
    }

    render() {
        const { value, isResultBlockVisible, foundItems, category, isLoading, isError} = this.state;
        const url = '/' + category;
        return (
            <div className="searchBar">
                <div className="searchBar__searchBlock">
                    <select 
                        ref={this.selectedValueRef}
                        onChange={this.handleSelectCategory}
                        onFocus={this.handleSelectCategory}
                        value={category}
                        className="select"
                    >
                        {
                            SEARCH_CATEGORIES.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)
                        }
                    </select>
                    <div className="searchBar__inputContainer">
                        <DebounceInput
                            debounceTimeout={700}
                            value={value}
                            type="text"
                            className="searchBar__input"
                            placeholder="type here"
                            autoComplete="off"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputChange}
                        />
                    </div>
                </div>
                {
                    isResultBlockVisible && (
                        <div className="searchResults">
                            { isLoading && <Loader/> }
                            { isError && <div>error</div> }
                            {
                                !isLoading
                                && !isError
                                && <SearchResults foundItems={foundItems} url={url} closeResults={this.closeResults} />
                            }
                        </div>
                    )
                }
            </div>
        );
    }
};

export default SearchBar;