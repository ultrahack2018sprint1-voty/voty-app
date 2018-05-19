import React, { Component } from 'react';
import styles from './Question.css';

class Question extends Component {
  render() {
    return (
      <div className={styles.section}>
        <h3>Question from: Brgrs</h3>
        <div className={styles.question}>
          <p>Do you like our Brgrs?</p>
          <div className={styles.answers}>
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Question;