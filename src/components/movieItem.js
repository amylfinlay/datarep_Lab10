/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 10
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Creates header class and extends into component
export class MovieItem extends React.Component {

    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //Asynchronous call which will delete unique ID from mongoDB
    DeleteMovie(e){
        e.preventDefault();
        console.log("Delete:" +this.props.movie._id)

        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

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
                    <Link to={"/edit/"+this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button> {/**Deletes movie */}
                </Card>
            </div>
        );
    }

}