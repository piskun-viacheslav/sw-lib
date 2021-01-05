import React, { Fragment } from 'react';
import CardsList from "../CardsList";

import styles from './index.module.scss'

const SearchResults = ({foundItems, url, closeResults }) => (
    <Fragment>
        <button
            type="button"
            className={styles.closeResultsButton}
            onClick={closeResults}
        >+</button>
        <CardsList data={foundItems} url={url} classNames={'LibraryList'}/>
    </Fragment>
);

export default SearchResults;