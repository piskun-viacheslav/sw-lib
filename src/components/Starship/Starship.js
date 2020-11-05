import React from 'react';

const Starship = ({ starship }) => {

    const { name, model, length, passengers, hyperdriveRating } = starship;
    return (
        <div className='libraryItem'>
            <h2 className="libraryItem__title">{ name }</h2>
            <div className="libraryItem__imageContainer">
                <div className="libraryItem__image libraryItem__image_starship"></div>
            </div>
            <div className="libraryItem__content">
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Name:</div>
                    <div className="libraryItemField__item">{ name }</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Model:</div>
                    <div className="libraryItemField__item">{ model }</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Length:</div>
                    <div className="libraryItemField__item">{ length }</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Passengers:</div>
                    <div className="libraryItemField__item">{ passengers }</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">HyperDrive Rating:</div>
                    <div className="libraryItemField__item">{ hyperdriveRating }</div>
                </div>
            </div>
            <button className="libraryItem__backButton" type="button">&#60;&#60; Back</button>
        </div>
    )
};

export default Starship;