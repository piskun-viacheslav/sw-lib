import React, { Fragment } from 'react';
import CardsList from "../CardsList";

import styles from './index.module.scss'

const SearchResults = ({foundItems, url, onCloseResults }) => (
    <Fragment>
        <button
            type="button"
            className={styles.closeResultsButton}
            onClick={onCloseResults}
        >+</button>
        <CardsList data={foundItems} url={url} classNames={'LibraryList'} onCloseResults={onCloseResults}/>
    </Fragment>
);

export default SearchResults;