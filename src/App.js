import React, { Component } from 'react';
import './App.css';
import Actors from './components/Actors';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <NavBar />
            <Switch>
               <Route exact path="/" component={ Home } />
               <Route path='/actors' component={ Actors } />
            </Switch>
            <Footer />
          </div>
      </Router>

    );
  }
}

export default App;
