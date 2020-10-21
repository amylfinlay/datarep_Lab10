/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 3
 */

import React from 'react';
import { Movies } from './movies';

//Creates header class and extends into component
export class Read extends React.Component {

    //Uses JSON to call information from component of each movie 
    state = {
        //Denotes an array
        movies: [
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title": "Charlie Wilson's War",
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
            ]
    };

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