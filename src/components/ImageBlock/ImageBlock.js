import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Loader from "../Loader";
import img from '../../images/person.png'

import styles from './index.module.scss'


class ImageBlock extends Component {
    state = {
        isLoading: true,
        url: null
    };

    componentDidMount() {
        fetch(this.props.url)
            .then(res => {
                if (res.status <= 300) {
                    return res.blob();
                }

                throw new Error()
            })
            .then(blob => {
                const url = URL.createObjectURL(blob);
                this.setState({
                    isLoading: false,
                    url
                })
            })
            .catch(() => {
                this.setState({
                    isLoading: false,
                    url: this.props.defaultUrl,
                });
            });
    }


    render() {
        const { isLoading, url} = this.state;

        if(isLoading) {
            return <Loader/>
        }

        return <img className={styles.image} src={url} alt=""/>
    }
}

export default ImageBlock;