import React from 'react';
import { Link } from "react-router-dom";
import ImageBlock from "../ImageBlock";
// import PropTypes from 'prop-types';

import styles from './index.module.scss'

const { link, imageContainer } = styles;

const CardPreview = ({card, url}) => (
    <li>
        <Link className={link} to={url + '/' + card.id }>
            <div className={imageContainer}>
                <ImageBlock imageUrl={card.imageUrl} defaultImageUrl={card.defaultImageUrl}/>
            </div>
            <p>{ card.name }</p>
        </Link>
    </li>
);

export default CardPreview;