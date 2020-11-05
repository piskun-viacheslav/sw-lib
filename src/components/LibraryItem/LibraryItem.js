import React, { Component } from 'react';
import Loader from "../Loader";

class LibraryItem extends Component {
    state = {
        dataList: null,
        isLoading: true,
        isError: false,
    };

    componentDidMount() {
        this.props.getData(this.props.id)
            .then(data => {
                this.setState({
                    dataList: data,
                    isLoading: false,
                    isError: false
                })
            })
            .catch(() => this.setState({
                isLoading: false,
                isError: true,
            }));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.id !== this.props.id) {
            this.setState({
                dataList: null,
                isLoading: true,
                isError: false,
            });

            this.props.getData(this.props.id)
                .then(data => {
                    this.setState({
                        dataList: data,
                        isLoading: false,
                        isError: false
                    })
                })
                .catch(() => this.setState({
                    isLoading: false,
                    isError: true,
                }));
        }
    }

    render() {
        const { isLoading, isError, dataList } = this.state;

        if (isError) {
            return <div>error</div>
        }
        if (isLoading) {
            return <Loader/>
        }

        return this.props.viewData(dataList);
    }
}

export default LibraryItem