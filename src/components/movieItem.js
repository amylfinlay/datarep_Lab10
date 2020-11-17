/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 7
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
                    <Card.Header>{this.props.movie.title}</Card.Header> {/**Displays movie title*/}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} alt="Poster" width="200" height="200"></img> {/**Displays poster*/}
                            <p>{this.props.movie.year}</p> {/**Displays release year*/}

                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}