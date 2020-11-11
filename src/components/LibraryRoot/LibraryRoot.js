import React, { Component } from 'react';
import Loader from "../Loader";

class LibraryRoot extends Component {
    state = {
        loadedData: null,
        isLoading: true,
        isError: false,
    };

    getLibraryData = (dataUrl, categoryType) => {
        this.props.getData(dataUrl, categoryType)
            .then(data => {
                this.setState({
                    loadedData: data,
                    isLoading: false,
                    isError: false
                })
            })
            .catch(() => this.setState({
                isLoading: false,
                isError: true,
            }));
    };

    componentDidMount() {
        console.log('componentDidMount()', this.state)
        const { url, params: { category } } = this.props.match;
        this.getLibraryData(url, category);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.match.url !== this.props.match.url){
            console.log('componentWillReceiveProps() before setState', this.state);
            this.setState({
                loadedData: null,
                isLoading: true,
                isError: false
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate() before if', this.state);
        if (prevProps.match.url !== this.props.match.url) {
            console.log('componentDidUpdate() after if', this.state);

            const { url, params: { category } } = this.props.match;
            this.getLibraryData(url, category);
        }
    }

    render() {
        const { isLoading, isError, loadedData } = this.state;
        const {component: Component} = this.props;
        console.log('render', this.state);

        if (isError) {
            return <div>error</div>
        }
        if (isLoading) {
            return <Loader/>
        }

        return <Component data={loadedData}/>;
    }
}

export default LibraryRoot;