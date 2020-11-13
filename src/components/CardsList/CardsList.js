import React from 'react';
import { Link } from "react-router-dom";
import ImageBlock from "../ImageBlock";
// import PropTypes from 'prop-types';

import styles from './index.module.scss'

const CardsList = ({ data = [], match }) => {
    const { url } = match;

    return (
        <ul className="libraryList">
            {
                data.length
                    ? data.map( item => (
                        <li className="libraryList__item" key={ item.id }>
                            <Link className="libraryList__link" to={url + '/' + item.id }>
                                <div className={styles.imageContainer}>
                                    <ImageBlock imageUrl={item.imageUrl} defaultImageUrl={item.defaultImageUrl}/>
                                </div>
                                <p>{ item.name }</p>
                            </Link>
                        </li>))
                    : <li className="libraryList__item">no items</li>
            }
        </ul>
    )
   };

export default CardsList;