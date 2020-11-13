import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index..module.scss';

const CardDetailsList = ({ fieldItem, classNames = ''}) => (
    <li className={cx(styles.field, classNames)}>
        <span className={styles.cell}>{ fieldItem.title }</span>
        <span className={styles.cell}>{ fieldItem.value }</span>
    </li>
);

export default CardDetailsList;
