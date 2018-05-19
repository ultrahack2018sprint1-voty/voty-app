import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Welcome from '../welcome/Welcome';
import Settings from '../settings/Settings';
import Question from '../question/Question';

import styles from './App.css';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.logo} />
        <BrowserRouter>
          <div className={styles.contentWrapper}>
            <Route path="/" component={Welcome} />
            <Route path="/settings" component={Settings} />
            <Route path="/question" component={Question} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
