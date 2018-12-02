import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import Tlc from './components/TLC.jsx';
import Employee from './components/Employee.jsx';
import Team from './components/Team.jsx';
import Navbar from './components/Navbar.jsx';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Navbar} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/tlc" component={Tlc} />
          <Route exact path="/teams" component={Team} />
          <Route exact path="/employee" component={Employee} />
        </div>
      </Router>

    );
  }
}

export default App;