import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import FieldList from "../FieldList";
import ImageBlock from "../ImageBlock";

import styles from './index.module.scss';

const LibraryItem = ({ data, classNames = ''}) => {
    const { info, name, imageUrl, defaultImageUrl } = data;

    return (
        <div className={cx(styles.item, classNames)}>
            <h2 className={styles.title}>{ name }</h2>
            <div className={styles.imageContainer}>
                <ImageBlock url={imageUrl} defaultUrl={defaultImageUrl}/>
            </div>
            <FieldList fieldList={ info } />
            <button className="backButton" type="button">&#60;&#60; Back</button>
        </div>
    )
};

export default LibraryItem;