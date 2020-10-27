/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 4
 */

import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

//Creates header class and extends into component
export class Read extends React.Component {

    state = {
        movies: []
    };

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then(
                (response) => {
                    this.setState({ movies: response.data.Search })

                })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                {/**Displays this h1 tag */}
                <h1>This is the read Component.</h1>
                {/**Create object to pass movies into movies, code is called JSX */}
                <Movies movies={this.state.movies}></Movies>

            </div>
        );
    }

}