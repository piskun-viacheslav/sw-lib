import React from 'react';

import CardDetailsItem from "../CardDetailsItem";

import cx from 'classnames';
import styles from "./index.module.scss";

const CardDetailsList = ({ fieldList, classNames = ''}) =>(
    <ul className={cx(classNames)}>
        {
            fieldList.map(item => <CardDetailsItem
                key={item.id}
                fieldItem={item}
                classNames={styles.item}
            />)
        }
    </ul>
);

export default CardDetailsList;