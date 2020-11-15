import React, { Component } from 'react';
import Loader from "../Loader";

class CardsRoot extends Component {
    state = {
        url: this.props.match.url,
        loadedData: null,
        isLoading: true,
        isError: false,
    };

    _fetchController = null;

    handleSucces = (data) => {
        this.setState({
            loadedData: data,
            isLoading: false,
            isError: false
        })
    };

    handleError = (e) => {
        if (e.name === 'AbortError') {
            console.log('--- current fetch was aborted ----')

            return;
        }

        this.setState({
            isLoading: false,
            isError: true,
        })
    };

    getLibraryData = (dataUrl, categoryType) => {
        if( this._fetchController ) {
            this._fetchController.abort()
        }

        this._fetchController = new AbortController();
        console.log('--- new controller was created ---')
        this.props.getData(
            dataUrl,
            categoryType,
            this._fetchController
        )
            .then(this.handleSucces)
            .catch(this.handleError);
    };

    componentDidMount() {
        const { params: { category } } = this.props.match;
        const { url } = this.state;
        this.getLibraryData(url, category);
    }

    static getDerivedStateFromProps(props, state) {
        if(props.match.url !== state.url)

        return {
            url: props.match.url,
            loadedData: null,
            isLoading: true,
            isError: false,
        };

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.url !== this.state.url) {
            const {  params: { category } } = this.props.match;
            const { url } = this.state;
            this.getLibraryData(url, category);
        }
    }

    componentWillUnmount() {
        this._fetchController.abort();
    }

    render() {
        const { isLoading, isError, loadedData, url } = this.state;
        const {component: Component} = this.props;
        console.log('render', this.state);
        if (isLoading) {
            return <Loader/>
        }

        if (isError) {
            return <div>error</div>
        }

        return <Component data={loadedData} url={url}/>
    }
}

export default CardsRoot;