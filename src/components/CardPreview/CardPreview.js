import React from 'react';
import { Link } from "react-router-dom";

import ImageBlock from "../ImageBlock";

import styles from './index.module.scss'

const CardPreview = ({card, url}) => {
    const linkPath = url + '/' + card.id;
    return (
        <li>
            <Link className={styles.link} to={linkPath}>
                <ImageBlock
                    classNameWrapper={styles.imageContainer}
                    imageUrl={card.imageUrl}
                    defaultImageUrl={card.defaultImageUrl}
                />
                <p>{ card.name }</p>
            </Link>
        </li>
    )
};

export default CardPreview;