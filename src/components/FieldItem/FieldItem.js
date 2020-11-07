import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index..module.scss';

const FieldItem = ({ fieldItem, classList = ''}) => (
    <li className={classNames(styles.field, classList)}>
        <span className={styles.cell}>{ fieldItem.title }</span>
        <span className={styles.cell}>{ fieldItem.value }</span>
    </li>
);

export default FieldItem;
