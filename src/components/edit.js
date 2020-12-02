/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 8
 */

import React from 'react';
import axios from 'axios';
//Creates header class and extends into component
export class Edit extends React.Component {

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

    /**Life cycle hook and ascynchronous function*/
    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Year: response.data.year,
                    Poster: response.data.poster
                })
            })
            .catch((error) => {
                console.log(error);
            });
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
            poster: this.state.Poster,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
        .then(res =>{
            console.log(res.data)
        })
        .catch()

        //Axios talks to server over http, POST sends data to the server
        //axios.post('http://localhost:4000/api/movies', newMovie)
        //.then((res)=>{
        //    console.log(res);
        // })
        //.catch((err)=>{
        //    console.log(err);
        //});
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        {/**Edits title */}
                        <label>Edit Movie Title:</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    {/**Edits Year */}
                    <div className="form-group">
                        <label>Edit Movie Year: </label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    {/**Adds an input to edit movie poster */}
                    <div className="form-group">
                        <label>Edit Movie Poster:</label>
                        <textarea type='text'
                            className="form-control"
                            value={this.state.Poser}
                            onChange={this.onChangePoster}></textarea>
                    </div>
                    {/**Adds an submit button */}
                    <div className="form-group">
                        <input type='submit'
                            value="Edit Movie"
                            className="btn btn-primary">
                        </input>
                    </div>
                </form>
            </div>
        );
    }

}