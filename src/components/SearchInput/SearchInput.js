import React, { useState } from 'react';
import * as ld from 'lodash';


const SearchInput = ({ onChange, onFocus, value , debounceTimeout}) =>  {
    const [ inputValue, setInputValue ] = useState(value);
    const debounceChange = ld.debounce((e) => onChange(e), debounceTimeout);
    const handleDebounceChange = (e) => {
        setInputValue(e.target.value);
        debounceChange(e)
    }
    return (
        <div className="searchBar__inputContainer">
                <input
                    value={inputValue}
                    type="text"
                    className="searchBar__input"
                    placeholder="type here"
                    autoComplete="off"
                    onChange={handleDebounceChange}
                    onFocus={handleDebounceChange}
                />
        </div>
    )};

export default SearchInput;