import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Result.css';

class Result extends Component {
  render() {
    return (
      <div className={styles.section}>
        <h2 className={styles.top}>Congratulations!</h2>
        {/* <div className={styles.stripes} /> */}
        <div className={styles.burger} />
        <h2 className={styles.bottom}>You won a free burger!</h2>
      </div>
    )
  }
}

export default withRouter(Result);