import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import CardDetailsItem from "../CardDetailsItem";
import ImageBlock from "../ImageBlock";

import styles from './index.module.scss';

const Card = ({ data, classNames = ''}) => {
    const { info, name, imageUrl, defaultImageUrl } = data;

    return (
        <div className={cx(styles.card, classNames)}>
            <h2 className={styles.title}>{ name }</h2>
            <div className={styles.imageContainer}>
                <ImageBlock url={imageUrl} defaultUrl={defaultImageUrl}/>
            </div>
            <CardDetailsItem fieldList={ info } />
            <button className="backButton" type="button">&#60;&#60; Back</button>
        </div>
    )
};

export default Card;