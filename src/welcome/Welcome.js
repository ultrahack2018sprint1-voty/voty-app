import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Welcome.css';

class Welcome extends Component {
  render() {
    const { history } = this.props;

    return (
      <div className={styles.section}>
        <div>
          <p>Do you agree to receive notifications?</p>
          <button
            onClick={() => history.push('/settings')}
            className={styles.btnAccept}
          >YES</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Welcome);