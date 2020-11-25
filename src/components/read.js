/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 9
 */

import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

//Creates header class and extends into component
export class Read extends React.Component {

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {
        movies: []
    };

    /**Calls json which contains information of movies */
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    this.setState({ movies: response.data })

                })
            .catch((error) => {
                console.log(error)
            });
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/movies')
        .then(
            (response) => {
                this.setState({ movies: response.data })

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
                <Movies movies={this.state.movies} ReloadData={this.reloadData}></Movies>

            </div>
        );
    }

}