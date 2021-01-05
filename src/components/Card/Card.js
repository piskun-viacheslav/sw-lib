import React from 'react';

import CardDetailsItem from "../CardDetailsList";
import ImageBlock from "../ImageBlock";

import cx from 'classnames';
import styles from './index.module.scss';

const Card = ({ history, data, classNames = ''}) => {

    const { info, name, imageUrl, defaultImageUrl } = data;

    return (
        <div className={cx(styles.card, classNames)}>
            <h2 className={styles.title}>{ name }</h2>
            <ImageBlock
                classNameWrapper={styles.imageContainer}
                imageUrl={imageUrl}
                defaultImageUrl={defaultImageUrl}
            />
            <CardDetailsItem fieldList={ info } />
            <button
                className={styles.button}
                type="button"
                onClick={history.goBack}
            >&#60;&#60; Back</button>
        </div>
    )
};

export default Card;