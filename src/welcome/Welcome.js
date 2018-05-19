import React, { Component } from 'react';
import styles from './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className={styles.section}>
        <div className={styles.logo}>
          <img src="http://placekitten.com/280/200" alt="" />
        </div>
        <div>
          <p>Do you agree to receive notifications?</p>
          <button>YES</button>
        </div>
      </div>
    )
  }
}

export default Welcome;