/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 3
 */

/**Imports different elements from different locations so application will run */
import React, { Component } from 'react';
import './App.css';
import { Contents } from './components/contents';
import 'bootstrap/dist/css/bootstrap.min.css'; /**Imports bootstrap template */
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';
import { Create } from './components/create';

/**Class calls component file */
class App extends Component {
  render() {
    return (

      <Router>  {/**Enables routing */}
        <div className="App">
          {/**Navbar displayed*/}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">React App</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          {/**Calls each component from the file and displays on seperate webpages: home, read and create*/}
          <Switch>
            <Route path='/' component={Contents} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/create' component={Create} exact />
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;
