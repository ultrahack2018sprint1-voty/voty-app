import React, { Component } from 'react';

import styles from './App.css';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className={styles.logo} />
    );
  }
}

export default App;
