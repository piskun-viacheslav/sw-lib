import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import FieldList from "../FieldList";

import styles from './index.module.scss';

const LibraryItem = ({ data, classList = ''}) => {
    const { info, name, imageUrl } = data;

    return (
        <div className={classNames(styles.item, classList)}>
            <h2 className={styles.title}>{ name }</h2>
            <div className={styles.imageContainer}>
                <img className={styles.image}
                     src={imageUrl}
                     alt={name}
                />
            </div>
            <FieldList fieldList={ info } />
            <button className="backButton" type="button">&#60;&#60; Back</button>
        </div>
    )
};

export default LibraryItem;