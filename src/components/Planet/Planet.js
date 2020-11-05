import React from 'react';

const Planet = ({ planet }) => {
    const { name, rotationPeriod, climate, terrain, population } = planet;
    return (
        <div className='libraryItem'>
            <h2 className="libraryItem__title">{ name }</h2>
            <div className="libraryItem__imageContainer">
                <div className="libraryItem__image libraryItem__image_planet"></div>
            </div>
            <div className="libraryItem__content">
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Name:</div>
                    <div className="libraryItemField__item">{ name }</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Rotation period:</div>
                    <div className="libraryItemField__item">{ rotationPeriod }</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Climate:</div>
                    <div className="libraryItemField__item">{ climate }</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Terrain:</div>
                    <div className="libraryItemField__item">{ terrain }</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Population:</div>
                    <div className="libraryItemField__item">{ population }</div>
                </div>
            </div>
            <button className="libraryItem__backButton" type="button">&#60;&#60; Back</button>
        </div>
    )
};

export default Planet;