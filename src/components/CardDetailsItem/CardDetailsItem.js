import React from 'react';
// import PropTypes from 'prop-types';
import CardDetailsList from "../CardDetailsList";
import cx from 'classnames';
import styles from "./index.module.scss";

const CardDetailsItem = ({ fieldList, classNames = ''}) =>(
    <ul className={cx(classNames)}>
        {
            fieldList.map(item => <CardDetailsList
                key={item.id}
                fieldItem={item}
                classList={styles.item}
            />)
        }
    </ul>
);

export default CardDetailsItem;