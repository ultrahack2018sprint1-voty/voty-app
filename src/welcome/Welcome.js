import React, { Component } from 'react';
import Sockette from 'sockette';
import styles from './Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ws: null,
    }
  }

  componentDidMount() {
    this.openConnection();
  }

  openConnection = () => {
    const ws = new Sockette(process.env.REACT_APP_WS_URL, {
      timeout: 5e3,
      maxAttempts: 10,
      onopen: e => console.log('Connected!', e),
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

  onMessage = (e) => {
    console.log('Received:', e);
    console.log('Message:', e.data);
  }

  render() {
    return (
      <div className={styles.section}>
        <div className={styles.logo}>
          <img src="http://placekitten.com/280/200" alt="" />
        </div>
        <div>
          <p>Do you agree to receive notifications?</p>
          <button onClick={this.closeConnection.bind(this)}>YES</button>
        </div>
      </div>
    )
  }
}

export default Welcome;