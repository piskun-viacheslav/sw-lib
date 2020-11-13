import React from 'react';
// import PropTypes from 'prop-types';
import FieldItem from "../FieldItem";
import cx from 'classnames';
import styles from "./index.module.scss";

const FieldList = ({ fieldList, classNames = ''}) =>(
    <ul className={cx(classNames)}>
        {
            fieldList.map(item => <FieldItem
                key={item.id}
                fieldItem={item}
                classList={styles.fieldItem}
            />)
        }
    </ul>
);

export default FieldList;