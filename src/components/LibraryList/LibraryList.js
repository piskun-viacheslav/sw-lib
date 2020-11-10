import React from 'react';
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

const LibraryList = ({ data = [], match }) => {
    const { url } = match;
    const dataView = data.map(person => (
        <li className="libraryList__item" key={ person.id }>
            <Link className="libraryList__link" to={url + '/' + person.id }>
                { person.name }
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

export default LibraryList;