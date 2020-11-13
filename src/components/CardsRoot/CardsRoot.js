import React, { Component } from 'react';
import Loader from "../Loader";

class CardsRoot extends Component {
    state = {
        loadedData: null,
        isLoading: true,
        isError: false,
    };

    _fetchController = null;

    startLoading= () => {
        this.setState({
            loadedData: null,
            isLoading: true,
            isError: false
        })
    };

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

            this.startLoading();
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
        const { url, params: { category } } = this.props.match;
        this.getLibraryData(url, category);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.match.url !== this.props.match.url) {
          this.startLoading();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.url !== this.props.match.url) {
            const { url, params: { category } } = this.props.match;
            this.getLibraryData(url, category);
        }
    }

    componentWillUnmount() {
        this._fetchController.abort();
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

export default CardsRoot;