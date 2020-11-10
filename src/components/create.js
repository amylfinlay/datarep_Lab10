/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 6
 */

import React from 'react';
import axios from 'axios';
//Creates header class and extends into component
export class Create extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    /**Creates buttons to submit information entered */
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    /**Submits title, year and poster information that was inserted */
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " "
            + this.state.Year + " "
            + this.state.Poster);

            //Creates object with 3 values
            const newMovie = {
                title: this.state.Title, 
                year: this.state.Year,
                poster: this.state.Poster
            }

            //Axios talks to server over http, POST sends data to the server
            axios.post('http://localhost:4000/api/movies', newMovie)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        {/**Adds an input to insert movie */}
                        <label>Add Movie Title:</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                     {/**Adds an input to insert movie year */}
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                     {/**Adds an input to insert movie poster */}
                    <div className="form-group">
                        <label>Add Movie Poster:</label>
                        <textarea type='text'
                            className="form-control"
                            value={this.state.Poser}
                            onChange={this.onChangePoster}></textarea>
                    </div>
                     {/**Adds an submit button */}
                    <div className="form-group">
                        <input type='submit'
                            value="Add Movie"
                            className="btn btn-primary">
                        </input>
                    </div>
                </form>
            </div>
        );
    }

}