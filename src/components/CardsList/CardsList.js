import React from 'react';

import CardPreview from "../CardPreview";

const CardsList = ({ data = [], url}) => (
        <ul className="libraryList">
            {
                data.length
                    ? data.map( card => <CardPreview key={card.id} card={card} url={url}/>)

                    : <li className="libraryList__item">no items</li>
            }
        </ul>
    );

export default CardsList;