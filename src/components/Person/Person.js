import React from 'react';

const Person = ({ person }) => {
    const { name, gender, birthYear, height, mass } = person;
    return (
        <div className='libraryItem'>
            <h2 className="libraryItem__title">{ name }</h2>
            <div className="libraryItem__imageContainer">
                <div className="libraryItem__image libraryItem__image_person"></div>
            </div>
            <div className="libraryItem__content">
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Name:</div>
                    <div className="libraryItemField__item">{ name }</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Gender:</div>
                    <div className="libraryItemField__item">{ gender }</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Birthday:</div>
                    <div className="libraryItemField__item">{birthYear}</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Height:</div>
                    <div className="libraryItemField__item">{ height } cm</div>
                </div>
                <div className="libraryItem__field libraryItemField">
                    <div className="libraryItemField__item">Mass:</div>
                    <div className="libraryItemField__item">{ mass } kg</div>
                </div>
            </div>
            <button className="libraryItem__backButton" type="button">&#60;&#60; Back</button>
        </div>
    )
};

export default Person;