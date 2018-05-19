import React, { Component } from 'react';
import Sockette from 'sockette';
import { withRouter } from 'react-router-dom';
import styles from './Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ws: null,
    }
  }

  openConnection = () => {
    const ws = new Sockette(process.env.REACT_APP_WS_URL, {
      timeout: 5e3,
      maxAttempts: 10,
      onopen: this.onOpen,
      onmessage: this.onMessage,
      onreconnect: e => console.log('Reconnecting...', e),
      onmaximum: e => console.log('Stop Attempting!', e),
      onclose: e => console.log('Closed!', e),
      onerror: e => console.log('Error:', e)
    });

    this.setState({ ws });
  }

  closeConnection() {
    const { ws } = this.state;
    if (ws) {
      ws.close();
    }
  }

  onOpen = (e) => {
    const { history } = this.props;

    console.log('Connected!', e);
    history.push('/settings');
  }

  onMessage = (e) => {
    console.log('Received:', e);
    console.log('Message:', e.data);
  }

  render() {
    return (
      <div className={styles.section}>
        <div>
          <p>Do you agree to receive notifications?</p>
          <button
            onClick={this.openConnection.bind(this)}
            className={styles.btnAccept}
          >YES</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Welcome);