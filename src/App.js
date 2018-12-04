import React, { Component } from 'react';
import './App.css';
import { PageHeader, Image } from 'react-bootstrap';
import logo from './images/logo.jpg'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Image src={logo} alt="Logo" rounded/>
          <PageHeader>
            <large>Coming Soon...</large>
          </PageHeader>
      </div>
    );
  }
}

export default App;
