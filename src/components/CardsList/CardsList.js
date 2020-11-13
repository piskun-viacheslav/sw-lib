import React from 'react';
import { Link } from "react-router-dom";
import ImageBlock from "../ImageBlock";
// import PropTypes from 'prop-types';

import styles from './index.module.scss'

const CardsList = ({ data = [], match }) => {
    const { url } = match;
    const dataView = data.map(person => (
        <li className="libraryList__item" key={ person.id }>
            <Link className="libraryList__link" to={url + '/' + person.id }>
                <div className={styles.imageContainer}>
                    <ImageBlock imageUrl={person.imageUrl} defaultImageUrl={person.defaultImageUrl}/>
                </div>
                <p>{ person.name }</p>
            </Link>
        </li>));
    return (
        <ul className="libraryList">
            {
                dataView.length
                    ? dataView
                    : <li className="libraryList__item">no items</li>
            }
        </ul>
    )
   };

export default CardsList;