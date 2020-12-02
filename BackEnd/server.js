/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 9
 */

const express = require('express')
const app = express()
const port = 4000 //port number
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Connection String
const myConnectionString = 'mongodb+srv://admin:amyfinlay@cluster0.ea4gp.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

//Telling schema what type of data to store
var movieSchema = new Schema({
    title: String,
    year: String,
    poster: String
});

var MovieModel = mongoose.model("movie", movieSchema);

//Returns movie information
app.get('/api/movies', (req, res) => {

    /**const mymovies = [

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
             "Title": "World War Z",
             "Year": "2013",
             "imdbID": "tt0816711",
             "Type": "movie",
             "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
         }
     ];
*/
    MovieModel.find((err, data) => {
        res.json(data);
    })

    /*Prints json and message to screen
         res.status(200).json({
            message: "Everything is ok",
             movies: mymovies
        });
        */
})

//Listeing for a http request that has a delete method
app.delete('/api/movies/:id', (req, res) => {
    console.log("Delete Movie: " + req.params.id);

    MovieModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data); //sends back data when movie has been deleted
    })
})

//Creates callback function
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);

    MovieModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

//Will make asynchronous call to the database and update id called
app.put('/api/movies/:id', (req, res) => {
    console.log("Update movie:" + req.params.id);
    console.log(req.body);

    MovieModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

//Post Method that extends from create.js in which movies can be added 
app.post('/api/movies', (req, res) => {
    console.log('Movie Recieved!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    MovieModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster

    })

    //Sends message back to client
    res.send('Item Added');
})

//The port that it is listening at
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})