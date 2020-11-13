import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index..module.scss';

const CardDetailsItem = ({ fieldItem, classNames = ''}) => (
    <li className={cx(styles.detail, classNames)}>
        <span className={styles.cell}>{ fieldItem.title }</span>
        <span className={styles.cell}>{ fieldItem.value }</span>
    </li>
);

export default CardDetailsItem;
