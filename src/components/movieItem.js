/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 6
 */

import React from 'react';
import Card from 'react-bootstrap/Card';

//Creates header class and extends into component
export class MovieItem extends React.Component {

    render() {
        return (
            <div>
                
                {/**Displays card which contains different information about the movie */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header> {/**Displays movie title*/}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img> {/**Displays poster*/}
                            <p>{this.props.movie.Year}</p> {/**Displays release year*/}

                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}