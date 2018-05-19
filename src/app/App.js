import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/welcome">Welcome</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/question">Question</Link>
        </nav>
      </div>
    );
  }
}

export default App;
