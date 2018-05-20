import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Welcome.css';

class Welcome extends Component {
  handleClick = () => {
    const { history, openConnection } = this.props;
    openConnection();
    history.push('/settings');
  }
  render() {

    return (
      <div className={styles.section}>
        <div className={styles.logo} />
        <div>
          <p>Do you agree to receive notifications?</p>
          <button
            onClick={this.handleClick.bind(this)}
            className={styles.btnAccept}
          >YES</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Welcome);