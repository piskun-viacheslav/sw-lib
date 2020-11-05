import React, { Component } from 'react';
import Loader from "../Loader";

import { Link } from "react-router-dom";


class LibraryList extends Component {
    state = {
        dataList: [],
        isLoading: true,
        isError: false,
    };

    componentDidMount() {
        this.props.getData()
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
                dataList: [],
                isLoading: true,
                isError: false,
            });
            this.props.getData()
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
        const { path } = this.props.match;
        const { isLoading, isError, dataList } = this.state;
        if (isError) {
            return <div>error</div>
        }
        if (isLoading) {
            return <Loader/>
        }

        const dataView = dataList.map(person => (
            <li className="libraryList__item" key={ person.id }>
                <Link className="libraryList__link" to={path + '/' + person.id }>
                    { person.name }
                </Link>
            </li>));
        return (
          <ul className="libraryList">
              {
                  dataView.length
                      ? dataView
                      : <li className="libraryList__item">no items</li>
              }
          </ul>
        )
    }
};

export default LibraryList;