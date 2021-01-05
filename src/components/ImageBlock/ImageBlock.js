import React, { Component } from 'react';
import Loader from "../Loader";

import styles from './index.module.scss'

class ImageBlock extends Component {
    state = {
        isLoading: true,
        imageUrl: null
    };

    componentDidMount() {
        fetch(this.props.imageUrl)
            .then(res => {
                if (res.status <= 300) {
                    return res.blob();
                }

                throw new Error()
            })
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                this.setState({
                    isLoading: false,
                    imageUrl
                })
            })
            .catch(() => {
                this.setState({
                    isLoading: false,
                    imageUrl: this.props.defaultImageUrl,
                });
            });
    }

    render() {
        const { isLoading, imageUrl} = this.state;
        const { classNameWrapper = ''} = this.props;

        if(isLoading) {
            return <Loader/>
        }

        return (
            <div className={classNameWrapper}>
                <img className={styles.image} src={imageUrl} alt=""/>
            </div>
        );
    }
}

export default ImageBlock;