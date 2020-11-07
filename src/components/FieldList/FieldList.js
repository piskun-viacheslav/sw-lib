import React from 'react';
// import PropTypes from 'prop-types';
import FieldItem from "../FieldItem";
import classNames from 'classnames';
import styles from "./index.module.scss";

const FieldList = ({ fieldList, classList = ''}) =>(
    <ul className={classNames(classList)}>
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